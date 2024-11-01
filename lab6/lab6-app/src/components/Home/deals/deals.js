import React from 'react';
import './deals.css';

const dealsData = [
    {
        name: 'Петро Олексійович',
        rating: 10,
        comment: 'Поторгувались за ящик ромашки',
    },
    {
        name: 'Васьок Пілорама',
        rating: 8,
        comment: "Нє ну Толя нормальний дядько",
    },
    {
        name: 'Олег Голуб',
        rating: 7,
        comment: "Погода Львів",
    },
    {
        name: 'Ірина Прокопівна',
        rating: 10,
        comment: "Це мій син.",
    },
];

// Компонент для відображення кожного коментаря
const CommentItem = ({ name, rating, comment }) => {
    return (
        <div className="comment-item">
            <h3>{name}</h3>
            <p>Рейтинг: <strong>{rating}/10</strong></p>
            <p>{comment}</p>
        </div>
    );
};

// Основний компонент для списку коментарів
const Comments = () => {
    return (
        <div className="comments">
            <h2>Відгуки про наш магазин</h2>
            <div className="comments-list">
                {dealsData.map((deal, index) => (
                    <CommentItem
                        key={index}
                        name={deal.name}
                        rating={deal.rating}
                        comment={deal.comment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
