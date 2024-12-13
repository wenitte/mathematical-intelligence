# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/13_-_Find_the_Coins/Solution



Modern Puzzles by Henry Ernest Dudeney: $13$
Find the Coins
Three men, Abel, Best and Crewe, possessed money, all in silver coins.
Abel had one coin fewer than Best and one more than Crewe.
Abel gave Best and Crewe as much money as they already had,
then Best gave Abel and Crewe the same amount of money as they they held,
and finally Crewe gave Abel and Best as much money as they then had.
Each man then held exactly $10$ shillings.
To find what amount each man started with is not difficult.
But the sting of the puzzle is in the tail.
Each man held exactly the same coins (the fewest possible) amounting to $10$ shillings.
What were the coins and how were they originally distributed?


Solution
Abel:

$2$ crowns
$2$ half crowns
$1$ shilling
$1$ threepenny bit
Best:

$1$ crown
$3$ shillings
$3$ threepenny bit
Crewe:

$1$ half crown
$2$ shillings
$2$ threepenny bit.


Proof
Recall that:

$1$ shilling is $12$ pence.
Hence $10$ shillings is $120$ pence.
Also recall that the "silver" coins available at the time of Dudeney were:

The threepenny bit: $\tfrac 1 4 \shillings$
The sixpence: $\tfrac 1 2 \shillings$
The shilling
The florin: $2 \shillings$
The half-crown: $2 \tfrac 1 2 \shillings$
The crown: $5 \shillings$
The half sovereign: $10 \shillings$

Let $a$, $b$ and $c$ respectively be the amounts of money each of Abel, Best and Crewe started with.
Let $a_n$, $b_n$, $c_n$ be the amounts held after the $n$th transaction, where $n \in \set {1, 2, 3}$.
We have:














\(\ds a_1\)

\(=\)







\(\ds a - b - c\)




















\(\ds b_1\)

\(=\)







\(\ds 2 b\)




















\(\ds c_1\)

\(=\)







\(\ds 2 c\)
























\(\ds a_2\)

\(=\)







\(\ds 2 a_1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {a - b - c}\)




















\(\ds b_2\)

\(=\)







\(\ds b_1 - a_1 - c_1\)




















\(\ds \)

\(=\)







\(\ds 2 b - \paren {a - b - c} - 2 c\)




















\(\ds \)

\(=\)







\(\ds 3 b - a - c\)




















\(\ds c_2\)

\(=\)







\(\ds 2 c_1\)




















\(\ds \)

\(=\)







\(\ds 4 c\)
























\(\ds a_3\)

\(=\)







\(\ds 2 a_2\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {2 \paren {a - b - c} }\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {a - b - c}\)




















\(\ds b_3\)

\(=\)







\(\ds 2 b_2\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {3 b - a - c}\)




















\(\ds \)

\(=\)







\(\ds 6 b - 2 a - 2 c\)




















\(\ds c_3\)

\(=\)







\(\ds c_2 - a_2 - b_2\)




















\(\ds \)

\(=\)







\(\ds 4 c - 2 \paren {a - b - c} - \paren {3 b - a - c}\)




















\(\ds \)

\(=\)







\(\ds 4 c - 2 a + 2 b + 2 c - 3 b + a + c\)




















\(\ds \)

\(=\)







\(\ds 7 c - a - b\)









But:

$a_3 = b_3 = c_3 = 120$
Hence we have the three simultaneous equations, expressed in matrix form as:

$\begin {bmatrix} 4 & -4 & -4 \\ -2 & 6 & -2 \\ -1 & -1 & 7 \end {bmatrix} \begin {bmatrix} a \\ b \\ c \end {bmatrix} = \begin {bmatrix} 120 \\ 120 \\ 120 \end {bmatrix}$

In reduced echelon form, this gives:

$\begin {bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end {bmatrix} \begin {bmatrix} a \\ b \\ c \end {bmatrix} = \begin {bmatrix} 195 \\ 105 \\ 60 \end {bmatrix}$

Hence converting to shillings and pence:














\(\ds a\)

\(=\)







\(\ds 16 \shillings \ 3 \oldpence\)




















\(\ds b\)

\(=\)







\(\ds 8 \shillings \ 9 \oldpence\)




















\(\ds c\)

\(=\)







\(\ds 5 \shillings\)










Because all men hold the same coins at the end, the total number of each coin must be a multiple of $3$.

Both Abel and Best have an odd number of threepenny bits, that is, $3 \oldpence$ coins.
Crewe has an even number of threepenny bits.
Thus the number of threepenny bits in total must be a multiple of $6$.
Hence the fewest possible threepenny bits is $6$.

Let us recall who had what after each transaction.
After Abel paid Best and Crewe, they had:

Abel: $30 \oldpence$
Best: $210 \oldpence$
Crewe: $120 \oldpence$
After Best paid Abel and Crewe, they had:

Abel: $60 \oldpence$
Best: $60 \oldpence$
Crewe: $240 \oldpence$
and of course after Crewe paid Abel and Best, they had:

Abel: $120 \oldpence$
Best: $120 \oldpence$
Crewe: $120 \oldpence$

The sum paid by Abel to Best of $105 \oldpence = 8 \shillings \ 9 \oldpence$ in the fewest possible coins is:

$1$ crown: $5 \shillings$ or $60 \oldpence$
$1$ half crown: $2 \tfrac 1 2 \shillings$ or $30 \oldpence$
$1$ shilling or $12 \oldpence$
$1$ threepenny bit.
The sum paid by Abel to Crewe of $60 \oldpence = 5 \shillings$ in the fewest possible coins is $1$ crown.
Abel is now left with $195 - 105 - 60 = 30 \oldpence$, which, in the fewest possible coins, is $1$ half crown.

So, the smallest number of coins Abel could have started with was:

$2$ crowns, one of which went to Best and the other to Crewe
$2$ half crowns, one of which went to Best and the other he kept
$1$ shilling, which went to Best
$1$ threepenny bit, which went to Best.
Thus Abel had $6$ coins.
Best had $1$ more coin than Abel, that is, $7$ coins.
Crewe had $1$ coin less than Abel, that is, $5$ coins.

The number of crowns must be a multiple of $3$.
Hence Best started with $1$ crown, and $6$ more coins adding to $45 \oldpence$

Suppose Best started with one half crown.
Then his remaining $5$ coins add up to $45 \oldpence$, and so were threepenny bit.
This tells us where all $6$ threepenny bits are.
So Best must have started with:

$1$ crown
$1$ half crown
$5$ threepenny bits.
By the rule of $3$, no half crown then remains for Crewe, and Crewe must have started with $5$ shillings.
After receiving $105 \oldpence$ from Abel, Best now has:

$2$ crowns
$2$ half crowns
$1$ shilling
$6$ threepenny bits.
Best now has to give:

at least $1$ of his crowns
at least $1$ of his half crowns
at least $4$ of his threepenny bits.
$10 \shillings = 120 \oldpence$ of this must go to Crewe.
Of this money, in order for Crewe to get his share of the coins:

at least $1$ of those coins must be a half crown, in order for Crewe to have his share
at least $2$ of those coins must be threepenny bits, in order for Crewe to have his share
The only way to make up $120 \oldpence$ with $1$ crown, $1$ half crown and threepenny bits, Best must give Crewe:

$1$ crown
$1$ half crown
$1$ shilling
$6$ threepenny bits.
This leaves $1$ half crown to give to Abel, leaving Best with just $1$ crown.
But now Abel has $2$ half crowns and Best has none, which cannot be redressed by Crewe.

Hence it cannot be the case that Best started with a half crown.

So, to make $45 \oldpence$ with $6$ coins, all shillings and threepenny bits, Best must have started with:

$1$ crown
$3$ shillings
$3$ threepenny bits.

So to make up the coins so as for there to be a total of a multiple of $3$ each, Crewe must have started with:

$1$ half crown
$2$ shillings
$2$ threepenny bits.

Thus at the end, each has:

$1$ crown
$1$ half crown
$2$ shillings
$2$ threepenny bits.

After Abel has given to Best and Crewe:
Abel has:

$1$ half crown
Best has:

$2$ crowns
$1$ half crown
$4$ shillings
$4$ threepenny bits.
Crewe has:

$1$ crown
$1$ half crown
$2$ shillings
$2$ threepenny bits.

Best now gives $30 \oldpence$ to Abel.
He cannot give his half crown as Abel now has $2$.
So he has to give to Abel:

$2$ shillings
$2$ threepenny bits
This leaves Best with:

$2$ crowns
$1$ half crown
$2$ shillings
$2$ threepenny bits.
of which he has to give $120 \oldpence$ to Crewe.
He does this by giving him his $2$ crowns.

Hence after Best has given to Abel and Crewe:
Abel has:

$1$ half crown
$2$ shillings
$2$ threepenny bits
Best has:

$1$ half crown
$2$ shillings
$2$ threepenny bits.
Crewe has:

$3$ crowns
$1$ half crown
$2$ shillings
$2$ threepenny bits.

Crewe now gives $1$ crown each to Abel and Best.
Each now has:

$1$ crown
$1$ half crown
$2$ shillings
$2$ threepenny bits.

In summary, they all started with:
Abel:

$2$ crowns
$2$ half crowns
$1$ shilling
$1$ threepenny bit
Best:

$1$ crown
$3$ shillings
$3$ threepenny bits
Crewe:

$1$ half crown
$2$ shillings
$2$ threepenny bits.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $13$. -- Find the Coins




