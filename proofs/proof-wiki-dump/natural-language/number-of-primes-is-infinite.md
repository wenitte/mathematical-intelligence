# 

Source: https://proofwiki.org/wiki/Number_of_Primes_is_Infinite

  This article was Featured Proof between 6th November 2017 and 17th November 2019.




Theorem
The number of primes is infinite.


Proof 1
Aiming for a contradiction, suppose there exists a greatest prime number $N$.
Hence, let $S$ denote the finite set of all prime numbers.
Euclid's Theorem states that:

For any finite set of prime numbers, there exists a prime number not in that set.
Hence there exists $N'$ not in $S$.
If $N' < N$ then $N \in S$.
Hence:

$N' > N$
which contradicts the assumption the $N$ is the greatest prime number.
The result follows by Proof by Contradiction.
$\blacksquare$


Proof 2
Define a topology on the integers $\Z$ by declaring a subset $U \subseteq \Z$ to be an open set if and only if it is either:

the empty set $\O$
or:

a union of sequences $\map S {a, b}$ such that $a \ne 0$, where:
$\map S {a, b} = \set {a n + b: n \in \Z} = a \Z + b$
In other words, $U$ is open if and only if every $x \in U$ admits some non-zero integer $a$ such that $\map S {a, x} \subseteq U$.

The open set axioms are verified as follows:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
All unions of open sets are open:
For any set of open sets $U_i$ and $x$ in their union $U$, any of the numbers $a_i$ for which $\map S {a_i, x} \subseteq U_i$ also shows that $\map S {a_i, x} \subseteq U$.


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
The intersection of two (and hence finitely many) open sets is open:
Let $U_1$ and $U_2$ be open sets.
Let $x \in U_1 \cap U_2$ (with integers $a_1$ and $a_2$ establishing membership).
Set $a$ to be the lowest common multiple of $a_1$ and $a_2$.
Then:

$\map S {a, x} \subseteq \map S {a_i, x} \subseteq U_1 \cap U_2$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
By definition, $\O$ is open: $\Z$ is just the sequence $\map S {1, 0}$, and so is open as well.

The topology is quite different from the usual Euclidean one, and has two notable properties:

$(1): \quad$ Since any non-empty open set contains an infinite sequence, no finite set can be open. Put another way, the complement of a finite set cannot be a closed set.
$(2): \quad$ The basis sets $\map S {a, b}$ are both open and closed: they are open by definition, and we can write $\map S {a, b}$ as the complement of an open set as follows:
$\ds \map S {a, b} = \Z \setminus \bigcup_{j \mathop = 1}^{a - 1} \map S {a, b + j}$
The only integers that are not integer multiples of prime numbers are $-1$ and $+1$, that is:

$\ds \Z \setminus \set {-1, +1} = \bigcup_{\text {$p$ prime} } \map S {p, 0}$
By the first property, the set on the left hand side cannot be closed.
On the other hand, by the second property, the sets $\map S {p, 0}$ are closed.
So, if there were only finitely many prime numbers, then the set on the right hand side would be a finite union of closed sets, and hence closed.
Therefore by Proof by Contradiction, there must be infinitely many prime numbers.
$\blacksquare$


Proof 3
Aiming for a contradiction, suppose that there are only $N$ prime numbers.
Let the set of all primes be:

$\Bbb P = \set {p_1, p_2, \ldots, p_N}$
By the Fundamental Theorem of Arithmetic, every integer $k > 1$ can be expressed in the form:

$k = {p_1}^{a_1} {p_2}^{a_2} \dotsm {p_N}^{a_N}$

Let $n > 1$ be fixed.
Let $a$ be the largest exponent occurring in the prime decomposition of all positive integers $k \le n$.
Then:

$\ds \sum_{k \mathop = 1}^n \frac 1 k \le \prod_{j \mathop = 1}^N \paren {\sum_{k \mathop = 0}^a \frac 1 { {p_j}^k} }$
is expressible in the form:




\(\text {(1)}: \quad\)









\(\ds 1 + \frac 1 2 + \frac 1 3 + \dotsb + \frac 1 n\)

\(\le\)







\(\ds \paren {1 + \frac 1 {p_1} + \frac 1 { {p_1}^2} + \dotsb + \frac 1 { {p_1}^a} }\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \paren {1 + \frac 1 {p_2} + \frac 1 { {p_2}^2} + \dotsb + \frac 1 { {p_2}^a} }\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \ \dotsb\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds \paren {1 + \frac 1 {p_N} + \frac 1 { {p_N}^2} + \dotsb + \frac 1 { {p_N}^a} }\)









which can be seen by multiplying out the factors on the right hand side.
But from Sum of Infinite Geometric Sequence:

$1 + x + x^2 + \dotsb = \dfrac 1 {1 - x}$
for all $x$ such that $\size x < 1$.
Thus the factors in $(1)$ are less than the numbers:

$\dfrac 1 {1 - 1 / p_1}, \dfrac 1 {1 - 1 / p_2}, \dotsb, \dfrac 1 {1 - 1 / p_N}$
and so:

$1 + \dfrac 1 2 + \dfrac 1 3 + \dotsb + \dfrac 1 n < \dfrac {p_1} {p_1 - 1} \dfrac {p_2} {p_2 - 1} \dotsm \dfrac {p_N} {p_N - 1}$
We have chosen $n > 1$ arbitrarily, so this holds for every $n > 1$.
This contradicts the result Harmonic Series is Divergent.

Hence the result, by Proof by Contradiction.
$\blacksquare$


Proof 4
Aiming for a contradiction, suppose there exist only a finite number of primes.
From Sum of Reciprocals of Powers as Euler Product:

$\ds \sum_{n \mathop \ge 1} \dfrac 1 {n^z} = \prod_p \frac 1 {1 - p^{-z} }$
When $z = 1$ this gives:

$\ds \sum_{n \mathop \ge 1} \dfrac 1 n = \prod_p \frac 1 {1 - 1 / p}$

There is believed to be a mistake here, possibly a typo.In particular: You cannot choose $z=1$ because Sum of Reciprocals of Powers as Euler Product requires $\map \Re z > 1$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

As by hypothesis there exist only a finite number of primes, the right hand side is also finite.
But from Harmonic Series is Divergent, the left hand side diverges to infinity.
The result follows by Proof by Contradiction.
$\blacksquare$


Proof 5
Aiming for a contradiction, suppose there exist $n$ prime numbers.
Consider the Fermat number $F_n$.
From Goldbach's Theorem, $F_n$ is coprime to each of $F_0$ to $F_{n - 1}$.
Therefore there must be a prime number which is a divisor of $F_n$ which is not a divisor of any of $F_0$ to $F_n$.
But, again from Goldbach's Theorem, each of $F_0$ to $F_{n - 1}$ is coprime to every other Fermat number.
So all the $n$ prime numbers must have been exhausted being used as prime factors of $F_0$ to $F_{n - 1}$.
So there must be more prime numbers than $n$.
The result follows by Proof by Contradiction.
$\blacksquare$


Proof 6
Let $p_1, p_2, \ldots, p_j$ be the first $j$ primes.
For each real $x$ and natural number $j$, let:

$\map {M_j} x = \set {n \in \N \mid n \le x, \, n \text { is not divisible by any prime } p \text { with } p > p_j}$
Define:

$\map {N_j} x = \# \map {M_j} x$
Let $n \in \map {M_j} x$ for some $x$, $j$. 
We can write: 

$n = n_*^2 m$
where $n_*$ and $m$ are integers with $m$ square-free.
By the Fundamental Theorem of Arithmetic, we may uniquely write: 

$\ds m = \prod_{i \mathop = 1}^j p_j^{e_j}$
where $e_j \in \set {0, 1}$.
Since there are $2$ choices for each $e_j$, there are $2^j$ possible values of $m$.
Note that since $m \ge 1$, we have: 

$n_*^2 \le n \le x$
so:

$n_* \le \sqrt n \le \sqrt x$
So, there at most $\sqrt x$ possible values of $n_*$. 
So, there are at most $2^j \sqrt x$ possible values of $n$.
That is:

$\map {N_j} x \le 2^j \sqrt x$
Aiming for a contradiction, suppose that there are only finitely many primes.
In particular, assume that there are $k$ primes. 
Then:

$\map {N_k} x = x$
for each $x$, since there are no primes exceeding $p_k$. 
So, we have: 

$x \le 2^k \sqrt x$
for all $x$. 
But this does not hold for all $x$, for example taking $x = 2^{2 k} + 1$. 
So, we have arrived at a contradiction.
So there are infinitely many primes.
$\blacksquare$


Sources
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




