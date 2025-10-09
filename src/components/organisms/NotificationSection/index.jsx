import Button from "@/components/atoms/Button";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import classes from "./NotificationSection.module.css";

export default function NotificationSection({ children }) {
  const router = useRouter();

  return (
    <div className={classes.notificationCard}>
      <div className={classes.header}>
        <p className={classes.title}>Notifications</p>
        <Button
          variant="secondary"
          onClick={() => router.push("/notifications")}
          leftIcon={<GoArrowUpRight />}
          className={classes.notificationButton}
        />
      </div>
      {children}

      <div
        className={classes.footer}
        onClick={() => router.push("/notifications")}
      >
        <p className={clsx("fs14", classes.footerTitle)}>
          See all Notifications
        </p>
        <div className={classes.routeDiv}>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
