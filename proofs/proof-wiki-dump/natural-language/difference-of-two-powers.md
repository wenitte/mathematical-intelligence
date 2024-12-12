# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Powers



Theorem
Let $\mathbb F$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \N$ such that $n \ge 2$.

Then for all $a, b \in \mathbb F$:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1} }\)










For convenience of applicability, these results are sometimes separated into two cases for odd and even indices:

Difference of Two Odd Powers
Let $\mathbb F$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then for all $a, b \in \mathbb F$:














\(\ds a^{2 n + 1} - b^{2 n + 1}\)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^{2 n} a^{2 n - j} b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a^{2 n} + a^{2 n - 1} b + a^{2 n - 2} b^2 + \dotsb + a b^{2 n - 1} + b^{2 n} }\)











Difference of Two Even Powers
Let $\GF$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then for all $a, b \in \GF$:














\(\ds a^{2 n} - b^{2 n}\)

\(=\)







\(\ds \paren {a - b} \paren {a + b} \sum_{j \mathop = 0}^{n - 1} a^{2 \paren {n - j - 1} } b^{2 j}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a + b} \paren {a^{2 n - 2} + a^{2 n - 4} b^2 + a^{2 n - 6} b^4 + \dotsb + a^2 b^{2 n - 4} + b^{2 n - 2} }\)











General Commutative Ring
The result can also be extended into the general abstract algebraic context as follows:

Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$.
Let $a, b \in R$.
Let $n \in \N$ such that $n \ge 2$.

Then:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \circ \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} \circ b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \circ \paren {a^{n - 1} + a^{n - 2} \circ b + a^{n - 3} \circ b^2 + \dotsb + a \circ b^{n - 2} + b^{n - 1} }\)











Proof 1
Let $\ds S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$.
This can also be written:

$\ds S_n = \sum_{j \mathop = 0}^{n - 1} b^j a^{n - j - 1}$

Consider:

$\ds a S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j}  b^j$
Taking the first term (where $j = 0$) out of the summation, we get:

$\ds a S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j} b^j = a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j$

Similarly, consider:

$\ds b S_n = \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j}$
Taking the first term (where $j = 0$) out of the summation:

$\ds b S_n = \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j} = b^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j$
This is equal to:

$\ds b^n + \sum_{j \mathop = 1}^{n - 1} a^j b^{n - j}$
by Permutation of Indices of Summation.

So:














\(\ds \paren {a - b} S_n\)

\(=\)







\(\ds a \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j - b \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} a^{n - j} b^j - \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j}\)




















\(\ds \)

\(=\)







\(\ds a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j - \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j - b^n\)




















\(\ds \)

\(=\)







\(\ds a^n - b^n\)









$\blacksquare$


Proof 2
An instance of Difference of Two Powers in a General Commutative Ring.
$\blacksquare$


Proof 3
From Sum of Geometric Sequence:















\(\ds \sum_{j \mathop = 0}^{n - 1} x^j\)

\(=\)







\(\ds \frac {x^n - 1} {x - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac a b}^n - 1\)

\(=\)







\(\ds \paren {\dfrac a b - 1} \sum_{j \mathop = 0}^{n - 1} \paren {\dfrac a b}^j\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {a^n - b^n} {b^n} }\)

\(=\)







\(\ds \paren {\dfrac {a - b} b} \paren {\paren {\dfrac a b}^{n - 1} + \paren {\dfrac a b}^{n - 2} + \dotsb + \paren {\dfrac a b}^1 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + \dotsb + a b^{n - 2} + b^{n - 1} }\)





multiplying both sides by $b^n$



$\blacksquare$


Proof 4
The proof will proceed by the Principle of Complete Finite Induction on $\Z_{>0}$.
Let $S$ be the set defined as:

$\ds S := \set {n \in \Z_{>0}: a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j}$
That is, $S$ is to be the set of all $n$ such that:

$\ds a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$


Basis for the Induction
We have that:

$\ds a^1 - b^1 = \paren {a - b} \sum_{j \mathop = 0}^0 a^{1 - 0 - 1} b^j$

So $1 \in S$.
This is the basis for the induction.


Induction Hypothesis
It is to be shown that if $r \in S$ for all $r$ such that $1 \le r \le k$, then it follows that $k + 1 \in S$.

This is the induction hypothesis:

$\forall r \in \Z_{>0}: 1 \le r \le k: \ds a^r - b^r = \paren {a - b} \sum_{j \mathop = 0}^{r - 1} a^{r - j - 1} b^j$

It is to be demonstrated that it follows that:

$\ds a^{k + 1} - b^{k + 1} = \paren {a - b} \sum_{j \mathop = 0}^k a^{k - j} b^j$


Induction Step
This is the induction step:















\(\ds a^{k + 1} - b^{k + 1}\)

\(=\)







\(\ds \paren {a + b} \paren {a^k - b^k} - a b \paren {a^{k - 1} - b^{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a + b} \paren {a - b} \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^j - a b \paren {a - b} \sum_{j \mathop = 0}^{k - 2} a^{k - j - 2} b^j\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\paren {a + b} \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^j - a b \sum_{j \mathop = 0}^{k - 2} a^{k - j - 2} b^j}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\sum_{j \mathop = 0}^{k - 1} a^{k - j} b^j + \sum_{j \mathop = 0}^{k - 1} a^{k - j - 1} b^{j + 1} - \sum_{j \mathop = 0}^{k - 2} a^{k - j - 1} b^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {\sum_{j \mathop = 0}^{k - 1} a^{k - j} b^j + a^0 b^k}\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^k a^{k - j} b^j\)










So $\forall r \in S: 0 \le r \le k: r \in S \implies k + 1 \in S$ and the result follows by the Principle of Complete Finite Induction:

$\forall n \in \Z_{>0}: \ds a^n - b^n = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$
$\blacksquare$


Examples
Difference of Two Cubes
$x^3 - y^3 = \paren {x - y} \paren {x^2 + x y + y^2}$


Difference of Two Fourth Powers
$x^4 - y^4 = \paren {x - y} \paren {x + y} \paren {x^2 + y^2}$


Difference of Two Fifth Powers
$x^5 - y^5 = \paren {x - y} \paren {x^4 + x^3 y + x^2 y^2 + x y^3 + y^4}$


Difference of Two Sixth Powers
$x^6 - y^6 = \paren {x - y} \paren {x + y} \paren {x^2 + x y + y^2} \paren {x^2 - x y + y^2}$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $3$




