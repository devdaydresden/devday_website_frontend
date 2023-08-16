import { APISpeakers, Answer, Availability, Speaker } from './speaker.interface'

export const fakePretalx: APISpeakers = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      code: "ABCDE",
      name: "Max Mustermann",
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
      code: "XYZ123",
      name: "Alexander Pronin",
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
      name: "Einfach Tobias",
      biography: "Wird schon",
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
      code: "BDF456",
      name: "Versteckter Sprecher",
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

