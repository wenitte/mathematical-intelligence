# 

Source: https://proofwiki.org/wiki/Construction_of_Geometric_Sequence_in_Lowest_Terms/Proof_1



Theorem
It is possible to find a geometric sequence of integers $G_n$ of length $n + 1$ with a given common ratio such that $G_n$ is in its lowest terms.

In the words of Euclid:

To find numbers in continued proportion, as many as may be prescribed, and the least of those that are in a given ratio.
(The Elements: Book $\text{VIII}$: Proposition $2$)


Proof
Let $r = \dfrac a b$ be the given common ratio.
Let the required geometric sequence have a length of $4$.
Let $a^2 = c$.
Let $a b = d$.
Let $b^2 = e$.
Let:

$a c = f$
$a d = g$
$a e = h$
and let:

$b e = k$
As:

$a^2 = c$
$a b = d$
it follows from Proposition $17$ of Book $\text{VII} $: Multiples of Ratios of Numbers that:

$\dfrac a b = \dfrac c d$
As:

$a b = d$
$b^2 = e$
it follows from Proposition $18$ of Book $\text{VII} $: Ratios of Multiples of Numbers that:

$\dfrac a b = \dfrac d e$
As:

$a c = f$
$a d = g$
it follows from Proposition $17$ of Book $\text{VII} $: Multiples of Ratios of Numbers that:

$\dfrac c d = \dfrac f g$
As:

$a d = g$
$a e = h$
it follows from Proposition $17$ of Book $\text{VII} $: Multiples of Ratios of Numbers that:

$\dfrac d e = \dfrac g h$
As:

$a e = h$
$b e = k$
it follows from Proposition $18$ of Book $\text{VII} $: Ratios of Multiples of Numbers that:

$\dfrac a b = \dfrac h k$

Putting the above together:

$c, d, e$ are in geometric sequence with common ratio $\dfrac a b$
$f, g, h, k$ are in geometric sequence with common ratio $\dfrac a b$

We have that $a$ and $b$ are the smallest numbers with the same ratio.
So by Proposition $22$ of Book $\text{VII} $: Numbers forming Fraction in Lowest Terms are Coprime:

$a \perp b$
where $\perp$ denotes coprimality.

We also have that:

$a^2 = c, b^2 = e$
and:

$a c = e, b e = k$
so by Proposition $27$ of Book $\text{VII} $: Powers of Coprime Numbers are Coprime:

$c \perp e$
$f \perp k$
But from Proposition $1$ of Book $\text{VIII} $: Geometric Sequence with Coprime Extremes is in Lowest Terms, these are the least of those with the same common ratio.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $2$ of Book $\text{VIII}$ of Euclid's The Elements. This proof as given by Euclid takes the special case of four terms and expects the reader to extrapolate from there. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




