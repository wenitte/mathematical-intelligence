# 

Source: https://proofwiki.org/wiki/Limit_of_Decreasing_Sequence_of_Left_Half-Open_Intervals_with_Lower_Bound_Converging_to_Upper_Bound

Theorem
Let $a, b \in \R$ have $a < b$.
Let $\sequence {a_n}_{n \mathop \in \N}$ be an increasing sequence with $a_n \to b$. 

Then we have: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {a_n} b = \set b$
That is: 

$\hointl {a_n} b \downarrow \set b$
where $\downarrow$ denotes the limit of decreasing sequence of sets.


Proof
Clearly:

$\ds b \in \bigcap_{n \mathop = 1}^\infty \hointl {a_n} b$
so that: 

$\ds \set b \subseteq \bigcap_{n \mathop = 1}^\infty \hointl {a_n} b$
Now let: 

$\ds x \in \bigcap_{n \mathop = 1}^\infty \hointl {a_n} b$
Then: 

$a_n \le x \le b$
for each $n \in \N$.
From Limits Preserve Inequalities, we then have: 

$b \le x \le b$
so that: 

$x = b$
So: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {a_n} b = \set b$
as required.
$\blacksquare$





