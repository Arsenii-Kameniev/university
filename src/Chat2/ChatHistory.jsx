import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Chat2.module.css"
import { Link } from 'react-router-dom';

function ChatHistory() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.ChatHistory}`}>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>'A path from a point approximately 330 metres east of the most south westerly corner of 17 Batherton Close, Widnes and approximately 208 metres east-south-east of the most southerly corner of Unit 3 Foundry Industrial Estate, Victoria Street, Widnes, proceeding in a generally east-north-easterly direction for approximately 28 metres to a point approximately 202 metres east-south-east of the most south-easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street, and approximately 347 metres east of the most south-easterly corner of 17 Batherton Close, then proceeding in a generally northerly direction for approximately 21 metres to a point approximately 210 metres east of the most south-easterly corner of Unit 5 Foundry Industrial Estate, Victoria Street, and approximately 202 metres east-south-east of the most north-easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-north-east direction for approximately 64 metres to a point approximately 282 metres east-south-east of the most easterly corner of Unit 2 Foundry Industrial Estate, Victoria Street, Widnes and approximately 259 metres east of the most southerly corner of Unit 4 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-north-east direction for approximately 350 metres to a point approximately 3 metres west-north-west of the most north westerly corner of the boundary fence of the scrap metal yard on the south side of Cornubia Road, Widnes, and approximately 47 metres west-south-west of the stub end of Cornubia Road be diverted to a 3 metre wide path from a point approximately 183 metres east-south-east of the most easterly corner of Unit 5 Foundry Industrial Estate, Victoria Street and approximately 272 metres east of the most north-easterly corner of 26 Ann Street West, Widnes, then proceeding in a generally north easterly direction for approximately 58 metres to a point approximately 216 metres east-south-east of the most easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street and approximately 221 metres east of the most southerly corner of Unit 5 Foundry Industrial Estate, Victoria Street, then proceeding in a generally easterly direction for approximately 45 metres to a point approximately 265 metres east-south-east of the most north-easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 265 metres east of the most southerly corner of Unit 5 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-south-east direction for approximately 102 metres to a point approximately 366 metres east-south-east of the most easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 463 metres east of the most north easterly corner of 22 Ann Street West, Widnes, then proceeding in a generally north-north-easterly direction for approximately 19 metres to a point approximately 368 metres east-south-east of the most easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 512 metres east of the most south easterly corner of 17 Batherton Close, Widnes then proceeding in a generally east-south, easterly direction for approximately 16 metres to a point approximately 420 metres east-south-east of the most southerly corner of Unit 2 Foundry Industrial Estate, Victoria Street and approximately 533 metres east of the most south-easterly corner of 17 Batherton Close, then proceeding in a generally east-north-easterly direction for approximately 240 metres to a point approximately 606 metres east of the most northerly corner of Unit 4 Foundry Industrial Estate, Victoria Street and approximately 23 metres south of the most south westerly corner of the boundary fencing of the scrap metal yard on the south side of Cornubia Road, Widnes, then proceeding in a generally northern direction for approximately 44 metres to a point approximately 3 metres west-north-west of the most north westerly corner of the boundary fence of the scrap metal yard on the south side of Cornubia Road and approximately 47 metres west-south-west of the stub end of Cornubia Road.’</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>'A path from a point approximately 330 metres east of the most south westerly corner of 17 Batherton Close, Widnes and approximately 208 metres east-south-east of the most southerly corner of Unit 3 Foundry Industrial Estate, Victoria Street, Widnes, proceeding in a generally east-north-easterly direction for approximately 28 metres to a point approximately 202 metres east-south-east of the most south-easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street, and approximately 347 metres east of the most south-easterly corner of 17 Batherton Close, then proceeding in a generally northerly direction for approximately 21 metres to a point approximately 210 metres east of the most south-easterly corner of Unit 5 Foundry Industrial Estate, Victoria Street, and approximately 202 metres east-south-east of the most north-easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-north-east direction for approximately 64 metres to a point approximately 282 metres east-south-east of the most easterly corner of Unit 2 Foundry Industrial Estate, Victoria Street, Widnes and approximately 259 metres east of the most southerly corner of Unit 4 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-north-east direction for approximately 350 metres to a point approximately 3 metres west-north-west of the most north westerly corner of the boundary fence of the scrap metal yard on the south side of Cornubia Road, Widnes, and approximately 47 metres west-south-west of the stub end of Cornubia Road be diverted to a 3 metre wide path from a point approximately 183 metres east-south-east of the most easterly corner of Unit 5 Foundry Industrial Estate, Victoria Street and approximately 272 metres east of the most north-easterly corner of 26 Ann Street West, Widnes, then proceeding in a generally north easterly direction for approximately 58 metres to a point approximately 216 metres east-south-east of the most easterly corner of Unit 4 Foundry Industrial Estate, Victoria Street and approximately 221 metres east of the most southerly corner of Unit 5 Foundry Industrial Estate, Victoria Street, then proceeding in a generally easterly direction for approximately 45 metres to a point approximately 265 metres east-south-east of the most north-easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 265 metres east of the most southerly corner of Unit 5 Foundry Industrial Estate, Victoria Street, then proceeding in a generally east-south-east direction for approximately 102 metres to a point approximately 366 metres east-south-east of the most easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 463 metres east of the most north easterly corner of 22 Ann Street West, Widnes, then proceeding in a generally north-north-easterly direction for approximately 19 metres to a point approximately 368 metres east-south-east of the most easterly corner of Unit 3 Foundry Industrial Estate, Victoria Street and approximately 512 metres east of the most south easterly corner of 17 Batherton Close, Widnes then proceeding in a generally east-south, easterly direction for approximately 16 metres to a point approximately 420 metres east-south-east of the most southerly corner of Unit 2 Foundry Industrial Estate, Victoria Street and approximately 533 metres east of the most south-easterly corner of 17 Batherton Close, then proceeding in a generally east-north-easterly direction for approximately 240 metres to a point approximately 606 metres east of the most northerly corner of Unit 4 Foundry Industrial Estate, Victoria Street and approximately 23 metres south of the most south westerly corner of the boundary fencing of the scrap metal yard on the south side of Cornubia Road, Widnes, then proceeding in a generally northern direction for approximately 44 metres to a point approximately 3 metres west-north-west of the most north westerly corner of the boundary fence of the scrap metal yard on the south side of Cornubia Road and approximately 47 metres west-south-west of the stub end of Cornubia Road.’</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.MessageTextRight}`}>
                    <div className={`${style.NameRight}`}>
                        <span className={`${style.Name}`}>You</span>
                    </div>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.MessageTextLeft}`}>
                    <div className={`${style.NameLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatHistory;

{/* <div className={`${style.ChatHistory}`}>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageLeft}`}>
                <div className={`${style.columnLeft}`}>
                    <div className={`${style.TimeLeft}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextLeft}`}>
                        <div className={`${style.TextLeft}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeLeft}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.MessageRight}`}>
                <div className={`${style.columnRight}`}>
                    <div className={`${style.TimeRight}`}>
                        <span className={`${style.Name}`}>Name</span>
                    </div>
                    <div className={`${style.MessageTextRight}`}>
                        <div className={`${style.TextRight}`}>
                            <span>Hey! This text is quite long, and will be truncated once displayed.</span>
                        </div>
                        <div className={`${style.TimeRight}`}>
                            <span>3:17 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}