import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const PostModal = (props) => {
	const [editorText, setEditorText] = useState("");

	const [shareImage, setShareImage] = useState("");

	const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea]= useState('')
	const handleChange = (e) => {
		const image = e.target.files[0];

		if (image === "" || image === "undefined") {
			alert(`not an image, the file is a ${typeof image}`);
			return;
		}
		setShareImage(image);
	};

    const switchAssetArea = (area)=>{
        setShareImage('')
        setVideoLink('')
        setAssetArea(area)
    }
	const reset = (e) => {
		setEditorText("");
        setShareImage('')
        setVideoLink('')
        setAssetArea('area')
		props.handleClick(e);
	};
	return (
		<>
			{props.showModal === "open" && (
				<Container>
					<Content>
						<Header>
							<h2>Create a post</h2>
							<button onClick={(event) => reset(event)}>
								<img src='/images/close-icon.svg' alt='close icon' />
							</button>
						</Header>
						<SharedContent>
							<UserInfo>
								<img src='/images/user.svg' alt='user photo' />
								<span>Name</span>
							</UserInfo>
							<Editor>
								<textarea
									value={editorText}
									onChange={(e) => setEditorText(e.target.value)}
									placeholder='What do you want to talk about?'
									autofocus='true'
								/>
                                { assetArea === 'image' ?

                                    <UploadImage>
									<input
										type='file'
										accept='image/png, image/jpeg'
										name='image'
										id='file'
										style={{ display: "none" }}
										onChange={handleChange}
									/>
									<p>
										<label htmlFor='file'>Select an image to share</label>
									</p>
									{shareImage && <img src={URL.createObjectURL(shareImage)} />}
                                    </UploadImage>
                                    :
                                    assetArea === 'media' &&
									<>
										<input
											type='text'
											placeholder='Please input a video link'
											defaultValue={videoLink}
											onChange={(e) => setVideoLink(e.target.value)}
										/>
									</>
                                }
									{videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
							</Editor>
						</SharedContent>
						<ShareCreation>
							<AttachAssets>
								<AssetButton onClick={()=> switchAssetArea('image')}>
									<img src='/images/share-photo.svg' alt='share icon' />
								</AssetButton>
								<AssetButton onClick={()=> switchAssetArea('media')}>
									<img src='/images/video.svg' alt='video icon' />
								</AssetButton>
							</AttachAssets>
							<ShareComment>
								<AssetButton>
									<img src='/images/comments.svg' />
									Anyone
								</AssetButton>
							</ShareComment>
							<PostButton disabled={!editorText ? true : false}
                            
                            >
								Post
							</PostButton>
						</ShareCreation>
					</Content>
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	color: black;
	background-color: rgba(0, 0, 0, 0.8);
	animation: fadeIn 0.4s;
`;
const Content = styled.div`
	width: 100%;
	max-width: 552px;
	background-color: white;
	max-height: 90%;
	overflow: initial;
	border-radius: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 32px;
	margin: 0 auto;
`;
const Header = styled.div`
	padding: 16px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	font-size: 16px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		height: 40px;
		width: 40px;
		max-width: auto;
		color: rgba(0, 0, 0, 0.15);
		&:hover {
			cursor: pointer;
		}
		svg,
		img {
			pointer-events: none;
		}
	}
`;

const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow-y: auto;
	vertical-align: baseline;
	background: transparent;
	padding: 8px 12px;
`;
const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 24px;
	svg,
	img {
		width: 48px;
		height: 48px;
		background-clip: content-box;
		border: 2px solid transparent;
		border-radius: 50%;
	}
	span {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		margin-left: 5px;
	}
`;
const ShareCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 24px 12px 16px;
`;

const AttachAssets = styled.div`
	display: flex;
	padding-right: 8px;
`;
const AssetButton = styled.button`
	display: flex;
	width: auto;
	height: 40px;
	align-items: center;
	color: rgba(0, 0, 0, 0.15);
	margin-right: 5px;

	img {
		width: 30px;
		height: 30px;
	}
`;
const ShareComment = styled.div`
	padding-left: 8px;
	margin-right: auto;
	border-left: 1px solid rgba(0, 0, 0, 0.15);
	${AssetButton} {
		svg {
			margin-right: 5px;
		}
	}
`;

const PostButton = styled.button`
	min-width: 60px;
	border-radius: 20px;
	padding-right: 16px;
	padding-left: 16px;
	background: ${(props) => (props.disabled ? "rgba(0,0,0,0.5)" : "#0a66c2")};
	color: ${(props) => (props.disabled ? "rgba(1,1,1,0,2)" : "white")};
	&:hover {
		background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
		cursor: ${(props) => (props.disabled ? " not-allowed" : "pointer")};
	}
`;

const Editor = styled.div`
	padding: 12px 24px;
	textarea {
		width: 100%;
		min-height: 100px;
		resize: none;
	}
	input {
		width: 100%;
		height: 35px;
		font-size: 16px;
		margin-bottom: 20px;
	}
`;
const UploadImage = styled.div`
	text-align: center;
    p{
        border: 1px solid #0a66c2;
        border-radius: 20px;
        padding: 10px;
        color: #0a66c2;
        margin-top: 3px;
        &:hover{
            background-color: #bbcfe2;
            cursor:pointer;
            opacity:0.9;
        }
        label{
            &:hover{
            background-color: #bbcfe2;
            cursor:pointer;
            
        }
        }
    }
	img {
		width: 100%;
	}
`;
export default PostModal;
