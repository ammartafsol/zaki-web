export const chatData = {
  rooms: [
    {
      roomSlug: "room-1",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "1",
          isOnline: true,
          fullName: "John Doe - Mark Henry",
          photo: "/app-images/default-user.png",
        },
        {
          _id: "2",
          isOnline: false,
          fullName: "John Doe - Mark Henry",
          photo: "/app-images/default-user.png",
        },
      ],
    },
    {
      roomSlug: "room-2",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "3",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },
    {
      roomSlug: "room-1",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "1",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
        {
          _id: "2",
          isOnline: false,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },

    {
      roomSlug: "room-2",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "3",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },
    {
      roomSlug: "room-1",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "1",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
        {
          _id: "2",
          isOnline: false,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },

    {
      roomSlug: "room-2",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "3",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },
    {
      roomSlug: "room-1",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "1",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
        {
          _id: "2",
          isOnline: false,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },

    {
      roomSlug: "room-2",
      lastMessage: {
        message: {
          type: "image", //link, audio, video, document, image,text
          text: "hello",
          media: "/app-images/blog-image.png",
        },
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      users: [
        {
          _id: "3",
          isOnline: true,
          fullName: "John Doe",
          photo: "/app-images/default-user.png",
        },
      ],
    },
  ],
  messages: [
    {
      _id: "1",
      message: {
        type: "audio", //link, audio, video, document, image,text
        text: "hello",
        media: "/app-images/blog-image.png",
      },
      createdAt: "2025-01-01T00:00:00.000Z",
      to: {
        _id: "1",
        fullName: "John Doe",
        photo: "/app-images/default-user.png",
      },
      from: {
        _id: "2",
        fullName: "John Doe",
        photo: "/app-images/default-user.png",
      },
    },
  ],
};
