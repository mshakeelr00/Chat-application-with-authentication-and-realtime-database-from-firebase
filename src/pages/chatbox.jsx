function ChatBox() {

    return (
        <div className="container">

            <div className="row">

                <div className="col-4 no-padd">

                    <div className="top-block block p-3 d-flex flex-row gap-3">
                        <div className="hamburger">
                            <img src="side_menu.png" alt="" />
                        </div>

                        <div className="search">

                            <input
                                id="chatSearch"
                                className="form-control chat-text rounded-5"
                                placeholder="Search here..."
                                aria-label="Search input"
                            />

                        </div>

                    </div>

                    <div className="chat_group">

                        <div className="block p-3 d-flex flex-row gap-3">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                                <img src="online.png" alt="" className="online" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for th...</div>
                            </div>

                            <div className="date_time">
                                9:41 AM
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">
                            <div className="u_image">
                                <img src="pic2.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Hamza Younas</div>
                                <div className="chat_message">The weather will be perfect for th...</div>
                            </div>

                            <div className="date_time">
                                Yesterday
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">

                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for...</div>
                            </div>

                            <div className="date_time">
                                12/11/2025
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">

                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for...</div>
                            </div>

                            <div className="date_time">
                                12/11/2025
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">

                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for...</div>
                            </div>

                            <div className="date_time">
                                12/11/2025
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">
                            <div className="u_image">
                                <img src="pic2.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Hamza Younas</div>
                                <div className="chat_message">The weather will be perfect for th...</div>
                            </div>

                            <div className="date_time">
                                Yesterday
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">

                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for...</div>
                            </div>

                            <div className="date_time">
                                12/11/2025
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">
                            <div className="u_image">
                                <img src="pic2.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Hamza Younas</div>
                                <div className="chat_message">The weather will be perfect for th...</div>
                            </div>

                            <div className="date_time">
                                Yesterday
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">

                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                                <div className="chat_message">The weather will be perfect for...</div>
                            </div>

                            <div className="date_time">
                                12/11/2025
                            </div>

                        </div>

                        <div className="block p-3 d-flex flex-row gap-3">
                            <div className="u_image">
                                <img src="pic2.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_name fw-bold">Hamza Younas</div>
                                <div className="chat_message">The weather will be perfect for th...</div>
                            </div>

                            <div className="date_time">
                                Yesterday
                            </div>

                        </div>
                    </div>

                </div>

                <div className="col-8 bb">

                    <div className="top-block block py-3 d-flex flex-row gap-3">
                        <div className="u_image">
                            <img src="pic.png" alt="" className="rounded-5" />
                        </div>

                        <div className="chat_info">
                            <div className="chat_name fw-bold">Muhammad Usman Awan</div>
                            <div className="chat_message">Online for 10 mins</div>
                        </div>
                    </div>

                    <div className="message_body p-3">

                        <div className="message py-3 d-flex flex-row gap-3 justify-content-start">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_message_message">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time mt-1">2:15 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-end">
                            {/* <div className="u_image">
                                        <img src="pic.png" alt=""  className="rounded-5"/>
                                    </div> */}

                            <div className="chat_info">
                                <div className="chat_message_message user_2">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time mt-1 text-end">2:17 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-start">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_message_message">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time">2:19 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-end">
                            {/* <div className="u_image">
                                        <img src="pic.png" alt=""  className="rounded-5"/>
                                    </div> */}

                            <div className="chat_info">
                                <div className="chat_message_message user_2">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time text-end">2:21 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-start">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_message_message">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time">2:25 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-end">
                            {/* <div className="u_image">
                                        <img src="pic.png" alt=""  className="rounded-5"/>
                                    </div> */}

                            <div className="chat_info">
                                <div className="chat_message_message user_2">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time text-end">2:26 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-start">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_message_message">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time">2:28 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-end">
                            {/* <div className="u_image">
                                        <img src="pic.png" alt=""  className="rounded-5"/>
                                    </div> */}

                            <div className="chat_info">
                                <div className="chat_message_message user_2">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time text-end">2:30 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-start">
                            <div className="u_image">
                                <img src="pic.png" alt="" className="rounded-5" />
                            </div>

                            <div className="chat_info">
                                <div className="chat_message_message">Ladies and gentlemen, we have lift off</div>
                                <div className="message_time">2:28 PM</div>
                            </div>
                        </div>


                        <div className="message py-3 d-flex flex-row gap-3 justify-content-end">
                            {/* <div className="u_image">
                                        <img src="pic.png" alt=""  className="rounded-5"/>
                                    </div> */}

                            <div className="chat_info">
                                <div className="chat_message_message user_2">Ladies and gentlemen, we haveliftoff</div>
                                <div className="message_time text-end">2:30 PM</div>
                            </div>
                        </div>

                    </div>

                    <div className="inputgroup">
                        <div className="chat-input-wrapper d-flex gap-2 align-items-end">

                            <div className="">
                                {/* Attach button (example) */}
                                <button
                                    type="button"
                                    className="btn btn-light me-1 btn-attach"
                                    id="attachBtn"
                                    title="Attach file"
                                    aria-label="Attach file"
                                >
                                    📎
                                </button>
                            </div>

                            <div className="flex-grow-1">
                                <label htmlFor="chatInput" className="visually-hidden">
                                    Type your message
                                </label>
                                <textarea
                                    id="chatInput"
                                    className="form-control chat-textarea rounded-5"
                                    placeholder="Type your message..."
                                    rows="1"
                                    aria-label="Message input"
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex align-items-end">

                                {/* Send button */}
                                <button
                                    type="button"
                                    className="btn btn-primary btn-send"
                                    id="sendBtn"
                                    aria-label="Send message"
                                    disabled
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}


export default ChatBox;
