# 

Source: https://proofwiki.org/wiki/LCM_of_Three_Numbers



Theorem
Let $a, b, c \in \Z: a b c \ne 0$.
The lowest common multiple of $a, b, c$, denoted $\lcm \set {a, b, c}$, can always be found.

In the words of Euclid:

Given three numbers, to find the least number which they measure.
(The Elements: Book $\text{VII}$: Proposition $36$)


Proof
Let $d = \lcm \set {a, b}$.
This exists from Proposition $34$ of Book $\text{VII} $: Existence of Lowest Common Multiple.
Either $c \divides d$ or not, where $\divides$ denotes divisibility.

Suppose $c \divides d$.
But by definition of lowest common multiple, $a \divides d$ and $b \divides d$ also.
Suppose $a, b, c$ are divisors of $e$ where $e < d$.
Then $a, b$ are divisors of $e$.
That is, $e$ is a common divisor of $a$ and $b$ which is lower than $d$.
But by Proposition $35$ of Book $\text{VII} $: LCM Divides Common Multiple:

$d \divides e$
which is impossible.
It follows that there can be no such $e$.
Therefore $d = \lcm \set {a, b, c}$.

Now suppose $c \nmid d$.
Let $e = \lcm \set {c, d}$.
This exists from Proposition $34$ of Book $\text{VII} $: Existence of Lowest Common Multiple.
Since $a$ and $b$ are both divisors of $d$, it follows that:

$a \divides e$
$b \divides e$
But we have that $c \divides e$ as well.
Suppose $a, b, c$ are divisors of $f$ where $f < e$.
Then $a, b$ are divisors of $f$.
So by Proposition $35$ of Book $\text{VII} $: LCM Divides Common Multiple:

$d = \lcm \set {a, b} \divides f$
But also $c \divides f$.
Therefore $c$ and $d$ are divisors of $f$.
By Proposition $35$ of Book $\text{VII} $: LCM Divides Common Multiple:

$e = \lcm \set {c, d} \divides f$
But this is impossible as by hypothesis $f < e$.
Therefore $a, b, c$ are divisors of no number smaller than $e$.
Therefore $e = \lcm \set {a, b, c}$.
$\blacksquare$


Historical Note
This proof is Proposition $36$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




