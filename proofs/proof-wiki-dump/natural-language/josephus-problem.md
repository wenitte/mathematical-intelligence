# 

Source: https://proofwiki.org/wiki/Josephus_Problem



Classic Problem
This is the original Josephus problem, of which all others are variants.

Flavius Josephus, along with $40$ comrades in arms, have opted to commit suicide rather than fall into the hands of the Romans.
Because he really wants to stay alive, he suggests that they all stand in a circle, and count around it.
Every $3$rd person counted was to drop out of the circle and die.

Where did Josephus place himself, and his companion who also did not want to die, so that the two of them would remain the last two standing?


Turks and Christians Variant
On board a ship, tossed in storms and in danger of shipwreck, are $15$ Christians and $15$ Turks.
To lighten the load and save the ship, half are to be thrown overboard.
One of the Christians suggests that all should stand in a circle and every $9$th person counting around the circle should be chosen.
How should the Turks arrange themselves in the circle to ensure that only the Christians die?


Japanese Inheritance Variant
A father has $30$ children, $15$ by his first and $15$ by his second marriages.
He decides he has too many children to share out his inheritance between all of them.
The second wife suggests that the children be placed in a circle, and eliminated by counting continually around the circle, eliminating every $n$th child.

By malice, she makes sure that the first $14$ children eliminated are all the sons of the first wife.
The remaining child of that wife, seeing that he is alone, suggests that the order of the counting be reversed.
The second wife agrees, confident that one of her children must be the last survivor.
However, to her chagrin, the next $15$ children to be eliminated are all her own.

How were the children arranged, and how was the count done?


Solution
They placed themselves at positions $16$ and $31$ in the circle of $41$.


Proof
On the first time round the circle, we lose the people at positions:

$3$, $6$, $9$, $12$, $15$, $18$, $21$, $24$, $27$, $30$, $33$, $36$ and $39$.
We are left with:

$1$, $2$, $4$, $5$, $7$, $8$, $10$, $11$, $13$, $14$, $16$, $17$, $19$, $20$, $22$, $23$, $25$, $26$, $28$, $29$, $31$, $32$, $34$, $35$, $37$, $38$, $40$, $41$
Counting $3$ round from the now eliminated $39$ leads us to $1$, and so the following are eliminated from the above:

$1$, $5$, $10$, $14$, $19$, $23$, $28$, $32$, $37$, $41$
Now we are left with:

$2$, $4$, $7$, $8$, $11$, $13$, $16$, $17$, $20$, $22$, $25$, $26$, $29$, $31$, $34$, $35$, $38$, $40$
Counting $3$ round from the now eliminated $41$ leads us to $7$, and so the following are eliminated from the above:

$7$, $13$, $20$, $26$, $34$, $40$
Now we are left with:

$2$, $4$, $8$, $11$, $16$, $17$, $22$, $25$, $29$, $31$, $35$, $38$
Counting $3$ round from the now eliminated $40$ leads us to $8$, and so the following are eliminated from the above:

$8$, $17$, $29$, $38$
Now we are left with:

$2$, $4$, $11$, $16$, $22$, $25$, $31$, $35$
Counting $3$ round from the now eliminated $38$ leads us to $11$, and so the following are eliminated from the above:

$11$, $25$
Now we are left with:

$2$, $4$, $16$, $22$, $31$, $35$
Counting $3$ round from the now eliminated $25$ leads us to $2$, and so the following are eliminated from the above:

$2$, $22$
Now we are left with:

$4$, $16$, $31$, $35$
Counting $3$ round from the now eliminated $22$ leads us to $4$, and so the following are eliminated from the above:

$4$, $35$
Now we are left with:

$16$, $31$
which is what we wanted to know.
$\blacksquare$


Historical Note
The legend describes an incident during the sack of Jotapata in $\text {67 CE}$ by General Vespasian and his son Titus, both future emperors.
The story goes that the Jewish historian Flavius Josephus, at the time the commander of the Jewish rebels, was holed up in a cave with a bunch of comrades (some sources give the exact number of rebels as $41$), hiding from the Romans.
Death was preferable to capture, so they determined a procedure whereby they would all commit ritual suicide.
They all stood in a circle, and counted round.
Every third person was killed, and the gap was closed.
However, Josephus (and possibly a co-conspirator) figured out where to stand in the circle so as to be last to be picked.
He (or they) gave themselves up to the Romans.
Hence Josephus lived to tell the tale.

According to David Wells in his Curious and Interesting Puzzles of $1992$, this incident was first presented as a puzzle to be solved by Nicolas Chuquet, although he fails to indicate where it appears.

The exercise of elimination by counting is familiar to schoolchildren the world over.


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Josephus Problem: $98$




