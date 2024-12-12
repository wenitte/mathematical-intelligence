# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers

  This article is a landmark page.  It was the first theorem on $\mathsf{Pr} \infty \mathsf{fWiki}$!
  This article was Featured Proof between 8 August 2009 and 28 August 2009.




Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$

Plainly stated: the sum of the first $n$ natural numbers is equal to $\dfrac {n \paren {n + 1} } 2$.
This formula pops up frequently in fields as differing as calculus and computer science, and it is elegant in its simplicity.


Direct Proof
We have that:

$\ds \sum_{i \mathop = 1}^n i = 1 + 2 + \cdots + n$
Consider $\ds 2 \sum_{i \mathop = 1}^n i$.
Then:














\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds 2 \paren {1 + 2 + \dotsb + \paren {n - 1} + n}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 2 + \dotsb + \paren {n - 1} + n} + \paren {n + \paren {n - 1} + \dotsb + 2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + n} + \paren {2 + \paren {n - 1} } + \dotsb + \paren {\paren {n - 1} + 2} + \paren {n + 1}\)





Integer Addition is Commutative, Integer Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {n + 1}_1 + \paren {n + 1}_2 + \dotsb + \paren {n + 1}_n\)




















\(\ds \)

\(=\)







\(\ds n \paren {n + 1}\)









So:














\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n \paren {n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$


Proof by Telescoping Sum
Observe that:














\(\ds \sum_{i \mathop = 1}^n \paren {\paren {i + 1}^2 - i^2}\)

\(=\)







\(\ds -\sum_{i \mathop = 1}^n \paren {i^2 - \paren {i + 1} ^2}\)




















\(\ds \)

\(=\)







\(\ds -\paren {1 - \paren {n + 1}^2}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \paren {n + 1}^2 - 1\)









Moreover, we have:

$\paren {i + 1}^2 - i^2 = 2 i + 1$
And also:

$\paren {n + 1}^2 - 1 = n^2 + 2 n$
Combining these results, we obtain:














\(\ds n + 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n^2 + 2 n\)














\(\ds \leadsto \ \ \)





\(\ds 2 \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds n \left({n + 1}\right)\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









This concludes the proof.
$\blacksquare$


Proof by Recursion
We have that:

$\ds \map T n = 1 + 2 + \dotsb + n = \sum_{i \mathop = 1}^n i$
Thus:














\(\ds \map T n\)

\(=\)







\(\ds n + \paren {n - 1} + \paren {n - 2} + \dotsb + 2 + 1\)




















\(\ds \)

\(=\)







\(\ds n + \paren {n - 1} + \paren {n - 2} + \dotsb + \paren {n - \paren {n - 2} } + \paren {n - \paren {n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \underbrace {n + n + \dotsb + n}_{n \text { times} }\)





extracting $n$ from each term














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1} + \paren {-2} + \dotsb + \paren {-\paren {n - 2} } + \paren {-\paren {n - 1} }\)




















\(\ds \)

\(=\)







\(\ds n^2 - \paren {1 + 2 + \dotsb + \paren {n - 1} }\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map T n\)

\(=\)







\(\ds n^2 - \map T {n - 1}\)










Then:




\(\text {(2)}: \quad\)









\(\ds \map T n\)

\(=\)







\(\ds n + \map T {n - 1}\)





Definition 1 of Triangular Number








\(\ds \leadsto \ \ \)





\(\ds 2 \, \map T n\)

\(=\)







\(\ds n^2 + n\)





$(1) + (2)$








\(\ds \leadsto \ \ \)





\(\ds \map T n\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$


Proof by Induction
Proof by induction:

Basis for the Induction
When $n = 1$, we have:

$\ds \sum_{i \mathop = 1}^1 i = 1$
Also:

$\dfrac {n \paren {n + 1} } 2 = \dfrac {1 \cdot 2} 2 = 1$
This is our base case.


Induction Hypothesis
$\forall k \in \N: k \ge 1: \ds \sum_{i \mathop = 1}^k i = \frac {k \paren {k + 1} } 2$
This is our induction hypothesis.
It is to be demonstrated that:

$\ds \sum_{i \mathop = 1}^{k + 1} i = \frac {\paren {k + 1} \paren {k + 2} } 2$


Induction Step
This is our induction step:
Consider $n = k + 1$.
By the properties of summation:

$\ds \sum_{i \mathop = 1}^{k + 1} i = \sum_{i \mathop = 1}^k i + k + 1$
Using the induction hypothesis this can be simplified to:














\(\ds \frac {k \paren {k + 1} } 2 + k + 1\)

\(=\)







\(\ds \frac {k \paren {k + 1} + 2 k + 2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {k^2 + 3 k + 2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1} \paren {k + 2} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1} \paren {\paren {k + 1} + 1} } 2\)










Hence the result by induction.
$\blacksquare$


Proof by Arithmetic Sequence













\(\ds \sum_{i \mathop = 0}^{m - 1} \paren {a + i d}\)

\(=\)







\(\ds m \paren {a + \frac {m - 1} 2 d}\)





Sum of Arithmetic Sequence














\(\ds \sum_{i \mathop = 0}^n \paren {a + i d}\)

\(=\)







\(\ds \paren {n + 1} \paren {a + \frac n 2 d}\)





Let $n = m - 1$














\(\ds \sum_{i \mathop = 0}^n i\)

\(=\)







\(\ds \paren {n + 1} \paren {\frac n 2}\)





Let $a = 0$ and $d = 1$














\(\ds 0 + \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)




















\(\ds \sum_{i \mathop = 1}^n i\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$


Proof by Polygonal Numbers
Triangular numbers are $k$-gonal numbers where $k = 3$.
From Closed Form for Polygonal Numbers we have that:

$P \left({k, n}\right) = \dfrac n 2 \left({\left({k - 2}\right) n - k + 4}\right)$

Hence:














\(\ds T_n\)

\(=\)







\(\ds \frac n 2 \left({\left({3 - 2}\right) n - 3 + 4}\right)\)





Closed Form for Polygonal Numbers














\(\ds \)

\(=\)







\(\ds \frac n 2 \left({n + 1}\right)\)









Hence the result.
$\blacksquare$


Proof using Binomial Coefficients
From Binomial Coefficient with One:

$\forall k \in \Z, k > 0: \dbinom k 1 = k$
Thus:














\(\ds \sum_{k \mathop = 1}^n k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \binom k 1\)





Binomial Coefficient with One














\(\ds \)

\(=\)







\(\ds \binom {n + 1} 2\)





Sum of k Choose m up to n‎














\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1} n} 2\)





Definition of Binomial Coefficient



$\blacksquare$


Proof using Cardinality of Set
Let $\N_n^* = \set {1, 2, 3, \cdots, n}$ be the initial segment of natural numbers.
Let $A = \set {\tuple {a, b}: a \le b, a, b \in \N_n^*}$
Let $B = \set {\tuple {a, b}: a \ge b, a, b, \in \N_n^*}$

Let $\phi: A \to B$ be the mapping:

$\map \phi {x, y} = \tuple {y, x}$
By definition of dual ordering, $\phi$ is a bijection:

$(1): \quad \size A = \size B$
We have:














\(\ds A \cup B\)

\(=\)







\(\ds \set {\tuple {a, b}: a, b \in \N_n^*}\)




















\(\ds A \cap B\)

\(=\)







\(\ds \set {\tuple {a, b}: a = b: a, b \in \N_n^*}\)









Thus:














\(\ds \size A + \size B\)

\(=\)







\(\ds \size {A \cup B} + \size {A \cap B}\)





Inclusion-Exclusion Principle














\(\ds \)

\(=\)







\(\ds n^2 + n\)





Count of a finite set



Combined with $\left({1}\right)$ this yields:

$\size A = \dfrac {n^2 + n} 2 = \dfrac {n \paren {n + 1} } 2$

It remains to prove that:

$T_n = \size A$













\(\ds T_n\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n i\)





Definition of $T_n$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N_n^*} i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N_n^*} \size {\set {a: a \in \N_i^*} }\)





Count of Finite Set,Definition of Initial Segment of One-Based Natural Numbers














\(\ds \)

\(=\)







\(\ds \size {\set {\tuple {a, i} :a\in \N_i^*, i \in \N_n^*} }\)





Inclusion-Exclusion Principle: the sets are pairwise disjoint as the second argument in the ordered pair is different














\(\ds \)

\(=\)







\(\ds \size {\set {\tuple {a, b}: a \le b, a, b \in \N_n^*} }\)





Change of Variable, Definition of Initial Segment of One-Based Natural Numbers














\(\ds \)

\(=\)







\(\ds \size A\)





Definition of $A$



$\blacksquare$


Proof using Odd Number Theorem













\(\ds \sum_{j \mathop = 1}^n \paren {2 j - 1}\)

\(=\)







\(\ds n^2\)





Odd Number Theorem








\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 1}^n \paren {2 j - 1} + \sum_{j \mathop = 1}^n 1\)

\(=\)







\(\ds n^2 + n\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 1}^n \paren {2 j}\)

\(=\)







\(\ds n \paren {n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{j \mathop = 1}^n j\)

\(=\)







\(\ds \frac {n \paren {n + 1} } 2\)









$\blacksquare$


Proof using Bernoulli Numbers
From Sum of Powers of Positive Integers:














\(\ds \sum_{i \mathop = 1}^n i^p\)

\(=\)







\(\ds 1^p + 2^p + \cdots + n^p\)




















\(\ds \)

\(=\)







\(\ds \frac {n^{p + 1} } {p + 1} + \sum_{k \mathop = 1}^p \frac {B_k \, p^{\underline {k - 1} } \, n^{p - k + 1} } {k!}\)









where $B_k$ are the Bernoulli numbers.

Setting $p = 1$:














\(\ds \sum_{i \mathop = 1}^n i^1\)

\(=\)







\(\ds 1 + 2 + \cdots + n\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} 2 + \frac {B_1 \, p^{\underline 0} n^1} {1!}\)




















\(\ds \)

\(=\)







\(\ds \frac {n^2} 2 + \frac 1 2 \frac {1 \times n} 1\)





Definition of Bernoulli Numbers, Number to Power of Zero Falling is One














\(\ds \)

\(=\)







\(\ds \frac {n^2 + n} 2\)









Hence the result.
$\blacksquare$


Combinatorial Proof
Suppose we have $n + 1$ people who all shake hands with each other person once then we can count how many handshakes occur by counting the handshakes of each person, the first person shakes hands with all other $n$ people, then the second person shakes hands with the remaining $n - 1$ people, which continues until the $n$-th person can only shake hands with the $(n + 1)$-th person, so counting backwards this consists of $\sum_{i = 0}^n i$ handshakes.  Similarly, we can count the number of choices of handshakes between any two of the $n + 1$ people, which will be ${n + 1 \choose 2} = \frac{n(n + 1)}{2}$ handshakes, which is our proposed solution to the sum.


Also presented as
The closed-form expression for the $n$th triangular number can also be presented as:

$\ds T_n = \sum_{i \mathop = 0}^n i = \frac {n \paren {n + 1} } 2$
This is seen to be equivalent to the given form by the fact that the first term $T_0$ evaluates as $\dfrac {0 \paren {0 + 1} } 2$ which is zero.


Also see
Compare Integral of Power for $n = 1$:
$\ds \int_0^b x \rd x = \frac {b^2} 2$


Historical Note
Some sources report that the closed-form expression for the $n$th triangular number was proved by Archimedes during the course of his proofs of the volumes of various solids of revolution in his On Conoids and Spheroids.
Others suggest that it was known as far back as Pythagoras of Samos, circa $550$ B.C.E.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Exercise $18.10 \ \text{(a)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Arithmetic Series: $19.2$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: $\text{1-1-1}$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Theorem $\text{1-1}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.17$: Finite Induction and Well-Ordering for Positive Integers: Exercise $2$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.6$: Mathematical Induction: Problem Set $\text{A}.6$: $35$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.3$ Early Number Theory: Problems $1.3$: $1 \ \text {(a)}$
1982: P.M. Cohn: Algebra: Volume $\text { 1 }$ (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers
1982: P.M. Cohn: Algebra: Volume $\text { 1 }$ (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $9$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $15$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.5$: Archimedes (ca. $\text {287}$ – $\text {212}$ B.C.)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $15$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): triangular number




