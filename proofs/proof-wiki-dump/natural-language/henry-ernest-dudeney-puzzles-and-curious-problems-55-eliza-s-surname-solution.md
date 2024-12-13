# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/55_-_Eliza%27s_Surname/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $55$
Eliza's Surname
Readers will remember the old puzzle of the "Dutchmen's Wives," nearly two hundred years old.
Here is a new extension of it (sent by C. C. P. S.):
Smith, Brown and Robinson have provided themselves with a penny pencil each,
and took their wives to a stockbroker's office to buy shares.
Mary bought $50$ more shares than Brown,
and Robinson $120$ more than Jane.
Each man paid as many shillings per share as he bought shares,
and each wife as many pence per share as she bought shares,
and every man spent one guinea more than his wife.
What was Eliza's surname?


Solution
Eliza is Mrs. Robinson.
We have that:

Brown bought $21$ shares, while his wife Mary bought $71$
Smith bought $49$ shares, while his wife Jane bought $169$
Robinson bought $289$ shares, while his wife Eliza bought $1001$.


Proof
Let the number of shares bought by any one woman be $w$.
Let the number of shares bought by her husband be $m$.
Then:

the money paid per share by the woman is $w^2 \oldpence$
the money paid per share by the man is ${\paren {w + n}^2 \shillings} = 12 \paren {w + n}^2 \oldpence$
where $m = w + n$.
Then we have that there are $21$ shillings to the guinea, which is $21 \times 12 = 252 \oldpence$
Hence:

$12 \paren {w + n}^2 + 1 = w^2 + 252$
The ${} + 1$ in the above is to account for the penny pencil.
That is:

$12 \paren {w + n}^2 = w^2 + 251$
or:

$(1): \quad 12 m^2 = w^2 + 251$

First note that we are looking for numbers $w$ such that their square with $251$ added is a multiple of $12$.
So $x^2$ has to be an odd square.
Let us investigate: $251$ we note is prime of the type $4 k + 3$.
Odd squares are $4 k + 1$.
So $251$ plus an odd square will be $4 k$, so we always know that $w^2 + 251$ will be divisible by $4$.
So we need to find only $w$ where $w^2 + 251$ is a multiple of $3$.
So consider the square numbers modulo $3$.
From Square Modulo 3:

$w^2 = \sqbrk {w \pmod 3 \ne 0}$
where $\sqbrk {\, \cdot \,}$ is Iverson's convention.
We have that $251 \equiv 2 \pmod 3$.
So for $w^2 + 251$ to be a multiple of $3$ we need:

$w^2 \equiv 1 \pmod 3$
which means $w$ cannot itself be a multiple of $3$, although that is the only constraint we can deduce here.

Let us put a table to match up $w$ with $\dfrac {w^2 + 251} {12}$ and keep a lookout for squares.
If such a square appears, report what $w + n$ is at that point.




$w$

$\dfrac {w^2 + 251} {12} = \paren {w + n}^2$

$w + n$


$1$

$21$




$5$

$23$




$7$

$25$

$5$


$11$

$31$




$13$

$35$




$17$

$45$




$19$

$51$




$23$

$65$




$25$

$73$




$29$

$91$



We have a possible pair $\tuple {7, 5}$ for $\paren {w, w + n}$, where in this case the wife bought more shares than her husband.
We note that the question does not state that the husband bought more than his wife, so this may be a valid answer.
We bank it, and move on.

We have been given that:

Mary bought $50$ more shares than Brown
which suggests that we may want to solve the equation:














\(\ds 12 \paren {w - 50}^2\)

\(=\)







\(\ds w^2 + 251\)














\(\ds \leadsto \ \ \)





\(\ds 11 w^2 - 1200 w + 29749\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \dfrac {419} {11} \text { or } 71\)









and we see that $71$ is an integer.
We also note that the corresponding $m = w - 50 = 21$ is also an integer.
Hence we have the solution $\tuple {21, 71}$, which would suggest that Mary may in fact be Mrs. Brown.

We also have that:

Robinson [bought] $120$ more [shares] than Jane.
Let us investigate whether Jane had more or less shares than the wife of Mr. Robinson.
We replace in $(1)$ Mr. Robinson's share $m$ by $w + 120$ which leads to:














\(\ds 12 \paren {w + 120}^2\)

\(=\)







\(\ds w^2 + 251\)














\(\ds \leadsto \ \ \)





\(\ds 11 w^2 - 2880 w + 172549\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \dfrac {1021} {11} \text { or } 169\)









From this we obtain the integer solution:

$\tuple {49, 169}$
Now we check the possible value for Mr. Robinson's number of shares $169 + 120$.
Substituting $289$ for $m$ in $(1)$ gives $w = 1001$ and the task is complete. 
These numbers satisfy the given problem, although it is noted we did not check if this is the only possible solution.
With this set of numbers Eliza is the wife of Mr. Robinson.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $55$. -- Eliza's Surname
miracle173 (https://math.stackexchange.com/users/11206/miracle173), Dudeney's "Puzzles and Curious Problems": 55 : Eliza's Surname, URL (version: 2021-12-29): https://math.stackexchange.com/q/4344545




