"use client";
import useAxios from "@/interceptor/axios-functions";
import Aos from "aos";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "..";
import { signOutRequest } from "../auth/authSlice";

export function CustomProvider({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApisProvider>{children}</ApisProvider>
      </PersistGate>
    </Provider>
  );
}

export default function ApisProvider({ children }) {
  let accessToken = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  const { Get } = useAxios();
  const [ready, setReady] = useState(false);

  const getCommonData = async () => {
    const [{ response: userResponse }] = await Promise?.all([
      Get({ route: "users/me" }),
    ]);
    if (userResponse) {
      dispatch(setExample(userResponse?.data?.data));
    }
  };

  useEffect(() => {
    if (accessToken) {
      // console.log("Access Token:", accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      dispatch(signOutRequest());
    } else {
      // getCommonData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Create the google_translate_element div if it doesn't exist
      if (!document.getElementById("google_translate_element")) {
        const translateDiv = document.createElement("div");
        translateDiv.id = "google_translate_element";
        translateDiv.style.display = "none"; // Hide the default widget
        document.body.appendChild(translateDiv);
      }

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );

        // Add a global function to trigger translation of new content
        window.triggerGoogleTranslate = () => {
          if (window.google && window.google.translate) {
            try {
              // Method 1: Use the internal Google Translate function
              if (window.google.translate.m && window.google.translate.m.m) {
                window.google.translate.m.m({});
              }

              // Method 2: Trigger the combo element change
              const comboElement = document.querySelector(".goog-te-combo");
              if (comboElement && comboElement.value) {
                const currentValue = comboElement.value;
                comboElement.value = "en"; // Switch to English first
                comboElement.dispatchEvent(new Event("change"));
                setTimeout(() => {
                  comboElement.value = currentValue; // Switch back to current language
                  comboElement.dispatchEvent(new Event("change"));
                }, 50);
              }

              // Method 3: Force DOM mutation detection with better error handling
              setTimeout(() => {
                try {
                  const nodes = document.querySelectorAll('[translate="yes"]');
                  nodes.forEach((node, index) => {
                    setTimeout(() => {
                      try {
                        // Create a subtle DOM change to trigger Google Translate
                        const textContent = node.textContent;
                        if (textContent && node.parentNode) {
                          node.setAttribute(
                            "data-translate-trigger",
                            Date.now()
                          );
                          // Force a reflow
                          node.offsetHeight;
                          setTimeout(() => {
                            if (node.parentNode) {
                              node.removeAttribute("data-translate-trigger");
                            }
                          }, 10);
                        }
                      } catch (nodeError) {
                        // Skip this node if there's an issue
                        console.warn("Skipping node translation:", nodeError);
                      }
                    }, index * 10); // Stagger the updates
                  });
                } catch (nodesError) {
                  console.warn(
                    "Error processing translation nodes:",
                    nodesError
                  );
                }
              }, 100);
            } catch (error) {
              console.warn("Error triggering Google Translate:", error);
            }
          }
        };

        setReady(true); // ✅ app is safe to render
      };
    };

    if (!window.google?.translate?.TranslateElement) {
      addGoogleTranslateScript();
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return (
      <div style={{ visibility: "hidden" }}>
        {/* <LoadingTemplate /> */}
      </div>
    );
  }

  return children;
}
