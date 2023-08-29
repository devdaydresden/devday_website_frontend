import { APISpeakers } from "../interfaces/speaker.interface";

export const fakePretalxSpeaker: APISpeakers = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      code: "ABCDE",
      name: "Ali G",
      biography: "Managing state and complex data in Angular",
      submissions: ["DEFAB"],
      avatar: "https://picsum.photos/200/300?random=3",
      availabilities: [
        {
          id: 1,
          start: "2023-08-24T04:00:00Z",
          end: "2023-08-25T04:00:00Z",
          allDay: false
        }
      ],
      answers: [
        { question: 'Favorite programming language?', answer: 'JavaScript' },
        { question: 'Experience in public speaking?', answer: 'Yes' }
      ]
    },
    {
      code: "WEWEWE",
      name: "WALL-E 🤖",
      biography: "A good speaker",
      submissions: ["DEFAB"],
      avatar: "https://picsum.photos/200/300?random=1",
      availabilities: [
        {
          "id": 1,
          "start": "2023-08-01T09:00:00Z",
          "end": "2023-08-02T09:00:00Z",
          "allDay": false
        }
      ],
      answers: [
        { question: 'Favorite programming language?', answer: 'JavaScript' },
        { question: 'Experience in public speaking?', answer: 'Yes' }
      ]
    },
    {
      code: "BDF456",
      name: "Barbie Puppe",
      biography: "Die Puppe wurde von Ruth Handler, einer der Gründerinnen von Mattel, inspiriert, die ihre Tochter Barbara beobachtete, wie sie mit Puppen Rollenspiele durchführte. Diese Beobachtung führte zur Schaffung der Barbie-Puppe, die nach ihrer Tochter benannt wurde.",
      submissions: ["DEFAB"],
      avatar: "https://picsum.photos/200/300?random=2",
      availabilities: [
        {
          "id": 1,
          "start": "2023-08-01T09:00:00Z",
          "end": "2023-08-02T09:00:00Z",
          "allDay": false
        }
      ],
      answers: [
        { question: 'Favorite programming language?', answer: 'JavaScript' },
        { question: 'Experience in public speaking?', answer: 'Yes' }
      ]
    },
    {
      code: "BDF123",
      name: "Ken Puppe",
      biography: "Jemand, der nicht angezeigt werden soll",
      submissions: ["DEFAB"],
      avatar: "https://picsum.photos/200/300?random=4",
      availabilities: [
        {
          "id": 1,
          "start": "2023-08-01T09:00:00Z",
          "end": "2023-08-02T09:00:00Z",
          "allDay": false
        }
      ],
      answers: [
        { question: 'Favorite programming language?', answer: 'JavaScript' },
        { question: 'Experience in public speaking?', answer: 'Yes' }
      ]
    },
  ]
}

