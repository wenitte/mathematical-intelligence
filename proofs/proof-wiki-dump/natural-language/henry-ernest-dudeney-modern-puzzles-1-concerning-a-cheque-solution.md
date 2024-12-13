# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/1_-_Concerning_a_Cheque/Solution



Modern Puzzles by Henry Ernest Dudeney: $1$
Concerning a Cheque
A man went into a bank to cash a cheque.
In handing over the money the cashier, by mistake, gave him pounds for shillings and shillings for pounds.
He pocketed the money without examining it, and spent half a crown on his way home, when he found that he possessed exactly twice the amount of the cheque.
He had no money in his pocket before going to the bank, and it is an interesting puzzle to find out what was the exact amount of that cheque.


Solution
As Dudeney puts it:

If you set to work under the notion that there were only pounds and shillings -- no pence --- in the amount, a solution is impossible.

The amount on the cheque was $\pounds 5 \ 11 \shillings 6 \oldpence$
He received $\pounds 11 \ 5 \shillings 6 \oldpence$
After spending half a crown, which is $2 \shillings 6 \oldpence$, he had $\pounds 11 \ 3 \shillings$
This is twice as much as $\pounds 5 \ 11 \shillings 6 \oldpence$


Proof
We recall the conversion factors:

$12$ pennies make one shilling
$20$ shillings make one pound.
$1$ half crown consists of $2$ shillings and $6$ pence.

Let $C$ be the amount written on the cheque.
Let $C'$ be the amount paid out to the man by the bank.
Let $P$ be the final amount in the man's pocket.
Suppose $C$ were an integral number of shillings.
Then $C'$ would also be an integral number of shillings.
But $P$, which is $C'$ less $2 \tfrac 1 2$ shillings is then not an integral number of shillings.
That means $P$ could not be twice $C$. 
Hence Dudeney's warning.

Let $C$ consist of $C_l$ pounds, $C_s$ shillings and $C_d$ pennies.
Let $P$ consist of $P_l$ pounds, $P_s$ shillings and $P_d$ pennies.

But what we can say about the pennies is that:

$(1): \quad 2 \times \paren {C_d - 6} = P_d \pmod {12}$
because $2 \paren {C - 2 \shillings 6 \oldpence} = P$
and also that:

$(2): \quad C_d - 6 = P_d \pmod {12}$
because $P_d$ is the actual number of pennies.
from which it follows that $C_d = 6$.

Let $D_1$ be the value of the cheque in pennies.
Let $D_2$ be the money the man left the bank with in pennies.
Let $D_3$ be the money the man arrived home with in pennies.
We have:

$D_1 = 240 C_l + 12 C_s + 6$
After coming out of the bank, the man has:

$D_2 = 240 C_s + 12 C_l + 6$
After arriving home, the man has:

$D_3 = 240 C_s + 12 \paren {C_l - 2}$
But we have:

$D_1 \times 2 = D_3$
which leads us to:














\(\ds 480 C_l + 24 C_s + 12\)

\(=\)







\(\ds 240 C_s + 12 C_l - 24\)














\(\ds \leadsto \ \ \)





\(\ds 468 C_l + 36\)

\(=\)







\(\ds 216 C_s\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds 6 C_s - 13 C_l\)

\(=\)







\(\ds 1\)





dividing by $36$



By inspection, we arrive at:

$13 \times 5 = 65 = 6 \times 11 - 1$
and the answer follows.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $1$. -- Concerning a Cheque




