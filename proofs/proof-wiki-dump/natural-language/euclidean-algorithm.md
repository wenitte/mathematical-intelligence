# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm



Algorithm
The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two integers $a$ and $b$.

Let $a, b \in \Z$ and $a \ne 0 \lor b \ne 0$.
The steps are:

$(1): \quad$ Start with $\tuple {a, b}$ such that $\size a \ge \size b$. If $b = 0$ then the task is complete and the GCD is $a$.
$(2): \quad$ If $b \ne 0$ then you take the remainder $r$ of $\dfrac a b$.
$(3): \quad$ Set $a \gets b, b \gets r$ (and thus $\size a \ge \size b$ again).
$(4): \quad$ Repeat these steps until $b = 0$.
Thus the GCD of $a$ and $b$ is the value of the variable $a$ after the termination of the algorithm.

In the words of Euclid:

Given two (natural) numbers not prime to one another, to find their greatest common measure.
(The Elements: Book $\text{VII}$: Proposition $2$)


Variant: Least Absolute Remainder
Let $a, b \in \Z$ and $a \ne 0 \lor b \ne 0$.
The steps are:

$(1): \quad$ Start with $\tuple {a, b}$ such that $\size a \ge \size b$. If $b = 0$ then the task is complete and the GCD is $a$.
$(2): \quad$ If $b \ne 0$ then you take the least absolute residue $r$ such that:
$a = q b + r: -\dfrac b 2 < r \le \dfrac b 2$
$(3): \quad$ Set $a \gets b, b \gets r$ (and thus $\size a \ge \size b$ again).
$(4): \quad$ Repeat these steps until $b = 0$.


Proof 1
Suppose $a, b \in \Z$ and $a \lor b \ne 0$.
From the Division Theorem, $a = q b + r$ where $0 \le r < \size b$.
From GCD with Remainder, the GCD of $a$ and $b$ is also the GCD of $b$ and $r$.

Therefore, we may search instead for $\gcd \set {b, r}$.
Since $\size r < \size b$ and $b \in \Z$, we will reach $r = 0$ after finitely many steps.
At this point, $\gcd \set {r, 0} = r$ from GCD with Zero.
$\blacksquare$


Proof 2
Suppose $a, b \in \Z$ and $a \lor b \ne 0$.
Let $d = \gcd \set {a, b}$.
By definition of common divisor:

$d \divides a$
and:

$d \divides b$
Hence from Common Divisor Divides Integer Combination:

$d \divides \paren {a - q b}$
That is:

$d \divides r$
Thus $d$ is a common divisor of $b$ and $r$.

Let $c$ be an arbitrary common divisor of $b$ and $r$.
Then:

$c \divides \paren {q b + r}$
That is:

$c \divides a$
Thus $c$ is a common divisor of $a$ and $b$.
Hence by definition of GCD:

$c \le d$
Hence, again by definition of GCD:
$d = \gcd \set {b, r}$

Then we work down the system of equations:














\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds \gcd \set {b, r_1}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_1, r_2}\)




















\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_{n - 1}, r_n}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {r_n, 0}\)




















\(\ds \)

\(=\)







\(\ds r_n\)









$\blacksquare$


Euclid's Proof
Let $AB, CD$ be the two given (natural) numbers which are not coprime.
We need to find the greatest common divisor of $AB$ and $CD$.


Without loss of generality that $CD \le AB$.
We have that $CD$ is a divisor of itself.
If $CD$ is a divisor of $AB$ then $CD$ is a common divisor of $CD$ and $AB$.
It is clearly the greatest, because no number greater than $CD$ can be a divisor  of $CD$.

Now, suppose $CD$ does not divide $AB$.
Then the less of the numbers $AB, CD$ being continually subtracted from the greater, some number will be left which will be a divisor  of the one before it.
From Coprimality Criterion, this number will not be a unit, otherwise $AB$ and $CD$ will be coprime.
So some number will be left which is a divisor of the one before it.

Now let $CD$, dividing $BE$, leave $EA$ less than itself.
Let $EA$, dividing $DF$, leave $FC$ less than itself.
Let $CF$ divide $AE$.
Since then $CF$ divides $AE$, and $AE$ divides $DF$, then $CF$ will also divide $DF$.
But it also divides itself.
Therefore it will also divide the whole $CD$.
But $CD$ divides $BE$, therefore $CF$ divides $BE$.
But it also divides $EA$, therefore it will also divide the whole $BA$.
So $CF$ is a common divisor of $CD$ and $AB$.

Suppose $CF$ is not the greatest common divisor of $CD$ and $AB$.
Let $G > CF$ also be a common divisor of $CD$ and $AB$.
Since $G$ divides $CD$, while $CD$ divides $BE$, it follows that $G$ divides $BE$.
But $G$ also divides the whole $BA$, and so it also divides the remainder $AE$.
But $AE$ divides $DF$.
Therefore $G$ divides $DF$.
But $G$ also divides the whole $DC$.
Therefore it will also divide the remainder $CF$.
But $G$ is greater than $CF$, which is impossible.
Therefore no number greater than $CF$ divides the numbers $AB$ and $CD$.
Therefore $CF$ is the greatest common divisor of $AB$ and $CD$.
$\blacksquare$


Demonstration
Using the Euclidean Algorithm, we can investigate in detail what happens when we apply the Division Theorem repeatedly to $a$ and $b$.














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1\)




















\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)




















\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3\)




















\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + r_n\)




















\(\ds r_{n - 1}\)

\(=\)







\(\ds q_{n + 1} r_n + 0\)










From the Division Theorem, we know that the remainder is always strictly less than the divisor.
That is, in $a = q b + r$:

$0 \le r < \size b$
So we know that:

$b > r_1 > r_2 > \ldots > r_{n - 2} > r_{n - 1} > r_n > 0$
So the algorithm has to terminate.
$\blacksquare$


Algorithmic Nature
It can be seen from the definition that the Euclidean Algorithm is indeed an algorithm:

Finiteness: As has been seen, the algorithm always terminates after a finite number of steps.
Definiteness: Each of the steps is precisely defined.
The inputs are $a$ and $b$.
The output is $\gcd \left\{{a, b}\right\}$.
Effectiveness: Each operation is finite in extent and can be effectively performed.


Formal Implementation
The Euclidean algorithm can be implemented as a computational method $\struct {Q, I, \Omega, f}$ as follows:

Let $Q$ be the set of:

all singletons $\tuple n$
all ordered pairs $\tuple {m, n}$
all ordered quadruples:
$\tuple {m, n, r, 1}$
$\tuple {m, n, r, 2}$
$\tuple {m, n, p, 3}$
where $m, n, p \in \Z_{> 0}$ and $r \in \Z_{\ge 0}$.

Let $I \subseteq Q$ be the set  of all ordered pairs $\tuple {m, n}$.

Let $\Omega$ be the set of all singletons $\tuple n$.

Let $f: Q \to Q$ be defined as follows:














\(\ds \map f {\tuple {m, n} }\)

\(=\)







\(\ds \tuple {m, n, 0, 1}\)




















\(\ds \map f {\tuple n}\)

\(=\)







\(\ds \tuple n\)




















\(\ds \map f {\tuple {m, n, r, 1} }\)

\(=\)







\(\ds \tuple {m, n, \map \rem {m, n}, 2}\)




















\(\ds \map f {\tuple {m, n, r, 2} }\)

\(=\)







\(\ds \begin{cases} \tuple n & : r = 0 \\ \tuple {m, n, r, 3} & : r \ne 0 \end{cases}\)




















\(\ds \map f {\tuple {m, n, p, 3} }\)

\(=\)







\(\ds \tuple {n, p, p, 1}\)









where $\map \rem {m, n}$ denotes the remainder of $m$ on division by $n$.


Constructing an Integer Combination
Having determined the GCD of $a$ and $b$ using the Euclidean Algorithm, we are now in a position to find a solution to $\gcd \set {a, b} = x a + y b$ for $x$ and $y$.
By Bézout's Identity it is always possible to find such an $x, y \in \Z$.
Working back through the equations generated during the course of working the Euclidean Algorithm, we get:














\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds r_n\)




















\(\ds \)

\(=\)







\(\ds r_{n - 2} - q_n r_{n - 1}\)




















\(\ds \)

\(=\)







\(\ds r_{n - 2} - q_n \paren {r_{n - 3} - q_{n - 1} r_{n - 2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + q_n q_{n - 1} } r_{n - 2} - q_n r_{n - 3}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + q_n q_{n - 1} } \paren {r_{n - 4} - q_{n - 2} r_{n - 3} } - q_n r_{n - 3}\)










... and so on. The algebra gets messier the further up the tree you go, and is not immediately enlightening.

Thus eventually we arrive at $\gcd \set {a, b} = x a + y b$ where $x$ and $y$ are numbers made up from some algebraic cocktail of the coefficients of the terms involving the remainders from the various applications of the Division Theorem.

Note that $a \divides b \implies \gcd \set {a, b} = a$, from GCD of Integer and Divisor.


Also known as
The Euclidean algorithm is also known as Euclid's algorithm or the Euclidean division algorithm.


Examples
GCD of $341$ and $527$
The GCD of $341$ and $527$ is found to be:

$\gcd \set {341, 527} = 31$


GCD of $2190$ and $465$
The GCD of $2190$ and $465$ is found to be:

$\gcd \set {2190, 465} = 15$
Hence $15$ can be expressed as an integer combination of $2190$ and $465$:

$15 = 33 \times 465 - 7 \times 2190$


GCD of $9 n + 8$ and $6 n + 5$
The GCD of $9 n + 8$ and $6 n + 5$ is found to be:

$\gcd \set {9 n + 8, 6 n + 5} = 1$
Hence:

$2 \paren {9 n + 8} - 3 \paren {6 n + 5} = 1$


Solution of $31 x \equiv 1 \pmod {56}$
Let $x \in \Z$ be an integer such that:

$31 x \equiv 1 \pmod {56}$
Then by using the Euclidean Algorithm:

$x = -9$
is one such $x$.


Also see
Rational Numbers and Simple Finite Continued Fractions are Equivalent‎ for an application of the Euclidean algorithm in a slightly different context.


Source of Name
This entry was named for Euclid.


Historical Note
This proof is Proposition $2$ of Book $\text {VII}$ of Euclid's The Elements.
According to David M. Burton, in his Elementary Number Theory, revised ed. of $1980$, there exists historical evidence that the Euclidean Algorithm actually predates Euclid.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): $\S 3.11$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Theorem $\text {2-2}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \zeta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12$: Highest common factors and Euclid's algorithm
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Euclidean algorithm
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Euclid's algorithm or Euclidean algorithm
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.1$: Number theory
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.1$: Algorithms: Algorithm $\text{E}$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): algorithm
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euclidean algorithm
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): algorithm
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euclidean algorithm
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euclidean Algorithm




