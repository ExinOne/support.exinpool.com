---
title: Introduction
description: ExinPool 
---


**[ExinPool](https://mixin.one/codes/791f20db-51ce-4af2-918b-7496864ab833)** is a one-stop liquidity solution for users in the Mixin ecosystem. Currently, it supports the following public chains: Mixin Network (XIN), Ethereum (ETH), Axie Infinity (AXS), Solana (SOL), Polkadot (DOT).

ExinPool is a **Staking** platform, more precisely, not an investment platform, but a platform for staking coins to their respective network nodes. The consensus mechanism of these nodes is primarily PoS. After participating in record-keeping, ExinPool receives the rewards distributed by the network and then distributes these earnings according to the shares of the users. The entire process is denominated in coins.

ExinPool uses a queuing mechanism to address liquidity. Each coin will have an initial quota set based on the staking requirements of the public chain. The progress of the fundraising will determine whether to increase the fundraising quota.

Participating in the fundraising for a specific coin (here we take XIN as an example) in ExinPool, XIN will have the following lifecycle:

* After the user pays for XIN and joins ExinPool: XIN is in the queue;
* When the queued XIN reaches the fundraising quota target: XIN has successfully joined but is not yet effective;
* When the node generates income: XIN has successfully joined and is in effect, income is distributed according to the snapshot.

Assuming the shares remain constant, suppose user A wants to join and user B wants to exit. If the queue number is greater than 0 and exceeds the number of queued exits, they will enter the queue to join, and user B can exit immediately, allowing user A to join. Similarly, suppose user A wants to join and user B wants to exit. If the current queue number is less than 0, they will enter the queue to exit, then user A can join, and user B can also exit after other users join. Of course, the final decision on whether a user can join or exit depends on the user's position in the queue and the share of the queue or exit.

ExinPool always prioritizes '**liquidity**' as the primary consideration. If a certain node has an excessive number of queued exits and no users have joined for a prolonged period, then upon the expiration and retrieval of the node's staking, a certain amount of sub-nodes or quantity will be dissolved to satisfy user liquidity.

If a user wants to exit while in the queue, a fee of 1 EPC is required to cancel the queue. If a user has successfully joined and generated income and wants to exit from ExinPool, a service fee is required to exit, and EPC can be used for deduction.

The coins supported by ExinPool will be snapshotted by default at 8:00 AM Beijing time, and the earnings will be distributed after 15:00 PM Beijing time. The rules for distributing earnings vary across different public chains, so the frequency of snapshotting and sending earnings varies slightly.

ExinPool is committed to providing a perfect one-stop liquidity solution for users in the Mixin ecosystem. Users participating in ExinPool can also use our other products, such as [ExinOne](https://mixin.one/codes/310e1f2b-2fc7-4ae0-ae2c-2f4c189808b1), to solve different transaction scenarios.