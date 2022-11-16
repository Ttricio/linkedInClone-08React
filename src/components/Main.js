import React, { useState, } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
const Main = () => {
	
	

	
	const [showModal, setShowModal] = useState("close");
	const handleClick = (e) => {
		if (e.target !== e.currentTarget) {
			return;
		}
		switch (showModal) {
			case "open":
				setShowModal("close");
				break;
			case "close":
				setShowModal("open");
				break;
			default:
				setShowModal("close");
				break;
		}
	};
	return (
		<Container>
			<ShareBox>
				
				<div>
					<img src='/images/avatar.svg' alt='photo icon'></img>
					<button onClick={handleClick}>Start a post</button>
				</div>
				<div>
					<button>
						<img src='/images/photo2.svg' alt='photo icon' />
						<span>Photo</span>
					</button>
					<button>
						<img src='/images/video.svg' alt='photo icon' />
						<span>Video</span>
					</button>
					<button>
						<img src='/images/calendar.svg' alt='photo icon' />
						<span>Event</span>
					</button>
					<button>
						<img src='/images/article2.svg' alt='photo icon' />
						<span>Write article</span>
					</button>
				</div>
			</ShareBox>
			<Article>
				<SharedArticle>
					<a>
						<img src='/images/avatar.svg' alt=''></img>
						<div>
							<span>Forest beauty</span>
							<span>Have a nice day</span>
							<span>16.11.2022</span>
						</div>
					</a>
					<button>
						<img src='/images/elipses.svg'></img>
					</button>
				</SharedArticle>
				<Description>Wildlife</Description>
				<SharedImg>
					<a>
						<img
							src='https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
							alt=''></img>
					</a>
				</SharedImg>
				<SocialCounts>
					<li>
						<button>
							<img src='/images/thumbUp.svg'></img>
							<img src='/images/clapping.svg'></img>
							<span>75</span>
						</button>
					</li>
					<li>
						<a>2 comments</a>
					</li>
				</SocialCounts>
				<Actions>
					<button>
						<img src='/images/like.svg'></img>
						<span>Like</span>
					</button>
					<button>
						<img src='/images/comments.svg'></img>
						<span>Comments</span>
					</button>
					<button>
						<img src='/images/share.svg'></img>
						<span>Share</span>
					</button>
					<button>
						<img src='/images/send.svg'></img>
						<span>Send</span>
					</button>
				</Actions>
			</Article>
			<PostModal showModal={showModal} handleClick={handleClick} />
		</Container>
	);
};

const Container = styled.div`
	grid-area: main;
`;
const CommonCard = styled.div`
	touch-action: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	justify-content: center;
	display: flex;
`;
const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b7b;
	margin: 0 0 8px;
	background: white;

	div {
		width: 90%;

		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 600;

			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16pc 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			color: blue;

			button {
				img {
					margin: 0 4px 0 -2px;
					width: 40px;
					height: 40px;
				}
			}
		}
	}
`;

const Article = styled(CommonCard)`
	padding: 0;
	margin: 0 8px;
	overflow: visible;
	font-weight: 600;
	display: flex;
	flex-direction: column;

	button {
		align-items: center;
		img {
			width: 18px;
			height: 18px;
		}
	}
`;
const SharedArticle = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	align-items: center;
	display: flex;
	width: 100%;

	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		text-decoration: none;

		img {
			width: 48px;
			height: 48px;
			margin-right: 12px;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			span {
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}
			}
			&:nth-child(n + 1) {
				font-size: 12px;
				color: rgba(0, 0, 0, 0.6);
			}
		}
	}

	button {
		position: absolute;
		right: 12px;
		top: 0px;
		background: transparent;
		border: none;
		outline: none;

		img {
			width: 32px;
			height: 32px;
		}
	}
`;

const Description = styled.div`
	padding: 0 16px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.9);
	text-align: left;
`;
const SharedImg = styled.div`
	margin-top: 8px;
	width: 100%;
	display: block;
	position: relative;
	background-color: #f9fafb;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;

const SocialCounts = styled.ul`
	line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9e5df;
	list-style: none;

	button {
		display: flex;
		background-color: transparent;
		border: none;
		outline: none;

		img {
			width: 14px;
			height: 14px;
			margin-right: 8px;
		}
	}

	li {
		margin-right: 5px;
		font-size: 12px;
	}
`;

const Actions = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	margin: 0;
	min-height: 40px;
	padding: 4px 8px;

	button {
		display: flex;
		align-items: center;
		padding: 8px;
		color: #0a66c2;
		background-color: transparent;
		border: none;
		outline: none;
		img {
			width: 18px;
			height: 18px;
			margin-right: 5px;
			
		}
		&:hover {
			cursor: pointer;
			transform: scale(1.02)
		}
		@media (max-width: 769px) {
			span {
				margin-left: 8px;
			}
		}
	}
`;
export default Main;
