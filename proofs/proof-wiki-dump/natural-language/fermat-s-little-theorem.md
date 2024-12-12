# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem

  This article was Featured Proof between 31 August 2008 and 8 September 2008.




Theorem
Let $p$ be a prime number.
Let $n \in \Z_{>0}$ be a positive integer such that $p$ is not a divisor of $n$.

Then:

$n^{p - 1} \equiv 1 \pmod p$


Corollary 1
If $p$ is a prime number, then $n^p \equiv n \pmod p$.


Corollary 2
Let $p$ be a prime number.
Then:

$n^{p - 1} \equiv \sqbrk {p \nmid n} \pmod p$
where:

$\nmid$ denotes non-divisibility
$\sqbrk \cdots$ is Iverson's convention.


Corollary 3
Let $p^k$ be a prime power for some prime number $p$ and $k \in \Z_{>0}$.
Then:

$\forall n \in \Z_{>0}: n^{p^k} \equiv n \pmod p$


Corollary 4
Let $p^k$ be a prime power for some prime number $p$ and $k \in \Z_{\gt 0}$.
Let $n \in \Z_{>0}$ with $p \nmid n$.
Then:

$n^{p^k - 1} \equiv 1 \pmod p$


Proof 1
Consider the integer sequence $n, 2 n, 3 n, \dotsc, \paren {p - 1} n$.
Note that none of these integers is congruent modulo $p$ to any of the others.
If this were the case, we would have $a n \equiv b n \pmod p$ for some $1 \le a < b \le p - 1$.
Then as $\map \gcd {n, p} = 1$, and we can cancel the $n$, we get $a \equiv b \pmod p$ and so $a = b$.

We have that:

$\forall c \in \set {1, 2, \dotsc, p - 1}: p \nmid n \land p \nmid c$
So by Euclid's Lemma:

$p \nmid c n$
for any such $c n$, which means:

$c n \not \equiv 0 \pmod p$
Thus, each integer in the sequence can be reduced modulo $p$ to exactly one of $1, 2, 3, \ldots, p - 1$.
So $\set {1, 2, 3, \ldots, p - 1}$ is the set of Reduced Residue System modulo $p$.

So, upon taking the product of these congruences, we see that:

$n \times 2 n \times 3 n \times \dots \times \paren {p - 1} n \equiv 1 \times 2 \times 3 \times \cdots \times \paren {p - 1} \pmod p$
This simplifies to:

$n^{p - 1} \times \paren {p - 1}! \equiv \paren {p - 1}! \pmod p$
Since $p \nmid \paren {p - 1}!$, we can cancel $\paren {p - 1}!$ from both sides, leaving us with:

$n^{p - 1} \equiv 1 \pmod p$
$\blacksquare$


Proof 2
By Prime not Divisor implies Coprime:

$p \nmid n \implies p \perp n$
and Euler's Theorem (Number Theory) can be applied.
Thus:

$n^{\map \phi p} \equiv 1 \pmod p$
But from Euler Phi Function of Prime Power:

$\map \phi p = p \paren {1 - \dfrac 1 p} = p - 1$
and the result follows.
$\blacksquare$


Proof 3
Let $\struct {\Z'_p, \times}$ denote the multiplicative group of reduced residues modulo $p$.
From the corollary to Reduced Residue System under Multiplication forms Abelian Group, $\struct {\Z'_p, \times}$ forms a group of order $p - 1$ under modulo multiplication.
By Element to Power of Group Order is Identity, we have:

$n^{p - 1} \equiv 1 \pmod p$
$\blacksquare$


Proof 4
Proof by induction over $n$.
Induction base:

$1^p \equiv 1 \pmod p$
Induction step:
Assume $n^p \equiv n \pmod p$














\(\ds \paren {n + 1}^p\)

\(=\)







\(\ds \sum_{k \mathop = 0}^p {p \choose k} n^{p - k} \cdot 1^k\)





Binomial Theorem










\(\ds \forall k: 0 < k < p: \, \)



\(\ds {p \choose k}\)

\(\equiv\)







\(\ds 0 \pmod p\)





Binomial Coefficient of Prime



and so:














\(\ds \sum_{k \mathop = 0}^p {p \choose k} n^{p - k}\)

\(\equiv\)







\(\ds n^p + n^0 \pmod p\)




















\(\ds \)

\(\equiv\)







\(\ds n^p + 1 \pmod p\)




















\(\ds \)

\(\equiv\)







\(\ds n + 1 \pmod p\)





Induction Step



Dividing by $n$:

$\forall n: n^p \equiv n \pmod p \implies n^{p - 1} \equiv 1 \pmod p$
$\blacksquare$


Proof 5
Let $S$ be a set of n elements, and consider $p$-tuples $\left( a_1, a_2, \dots, a_p \right)$ and consider the Group Action of these p-tuples by $\Z/p\Z$ via cyclic shifts.
For example, if $S = \{ b, r, g \}$ and $p=5$, then $rgbgg$ is equivalent to $grgbg, ggrgb, bggrg, gbggr$.
We use Burnside's Lemma, counting the number of elements fixed by each element of the group $\Z/p\Z$. Note that the identity fixes all $a^p$ elements, and the only tuples fixed by any of the other $p-1$ elements of $\Z/p\Z$ are the $a$ tuples that are made up of only one element of $S$, for example $rrrrr$, $ggggg$, and $bbbbb$. 
Burnside's Lemma says that $p \mid \left( n^p + (p-1) n \right)$ equivalently, $n^p \equiv n \pmod p$
$\blacksquare$


Examples
$5$ Divides $8^4 - 1$
$5 \divides 8^4 - 1$


$12$ Divides $n^2 - 1$ if $\gcd \set {n, 6} = 1$
$12$ divides $n^2 - 1$ if $\gcd \set {n, 6} = 1 \implies 12 \divides n^2 - 1$


Also known as
Some sources refer to Fermat's Little Theorem as Fermat's Theorem, but it needs to be appreciated that this may cause confusion with Fermat's Last Theorem.


Also defined as
Some sources refer to the Fermat's Little Theorem: Corollary $1$:

$n^p \equiv n \pmod p$
or:

$p \divides n^p - n$
as Fermat's Little Theorem and from it derive this result.


Also presented as
Some sources present Fermat's Little Theorem in the form:

$p \divides n^{p - 1} - 1$
where $\divides$ denotes divisibility.


Also see
Euler's Theorem (Number Theory)


Source of Name
This entry was named for Pierre de Fermat.


Historical Note
Fermat's Little Theorem was first stated, without proof, by Pierre de Fermat in $1640$.
Chinese mathematicians were aware of the result for $n = 2$ some $2500$ years ago.

The appearance of the first published proof of this result is the subject of differing opinions.

Some sources have it that the first published proof was by Leonhard Paul Euler $1736$.
Others state that it was first proved by Gottfried Wilhelm von Leibniz in an undated manuscript, and that he may have known a proof before $1688$, perhaps as early as $1683$.
MathWorld's page on the subject reports the first published proof as being by Leonhard Paul Euler $1749$, but it is possible this has been conflated with the proof for Fermat's Two Squares Theorem.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.6$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-2}$ Fermat's Little Theorem: Exercise $1$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $8$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 19$: Properties of $\Z_m$ as an algebraic system (mention)
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Theorem $3$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $64$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Fermat's little theorem
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.13$: Fermat ($\text {1601}$ – $\text {1665}$)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $64$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Fermat's theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): phi function (totient function)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): primality
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's phi function (phi function, totient function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Fermat's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): primality
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Fermat's Little Theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): pseudo-prime




