# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $X$ be a set of $n$ numbers $\set {x_1, x_2, \ldots, x_n}$.
Define:














\(\ds \mathbf S_m\)

\(=\)







\(\ds \set {\paren {j_1, \ldots, j_m} : 1 \le j_1 < \cdots < j_m \le n}\)





$1 \le m \le n$














\(\ds \map {e_m} X\)

\(=\)







\(\ds \begin {cases} 1 & : m = 0 \\ \ds \sum_{\mathbf S_m} x_{j_1} \cdots x_{j_m} & : 1 \le m \le n \\ 0 & : m > n \\ \end {cases}\)





Definition of Elementary Symmetric Function














\(\ds \map {p_k} X\)

\(=\)







\(\ds \begin{cases} n & : k = 0 \\ \ds \sum_{i \mathop = 1}^n  x_i^k & : k \ge 1 \end {cases}\)





Definition of Power Sum




The Newton-Girard Identities are:




\(\text {(1)}: \quad\)









\(\ds k \map {e_k} X\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \paren {-1}^{i - 1} \map {e_{k - i} } X \map {p_i} X\)





for $1 \le k \le n$




\(\text {(2)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = k - n}^k \paren {-1}^{i - 1} \map {e_{k - i} } X \map {p_i} X\)





for $1 \le n < k$






This article is complete as far as it goes, but it could do with expansion.In particular: Implement a simplified versionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Recurrence Formula
A recurrence relation for $h_n$ can be given as:














\(\ds h_n\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \dfrac {\paren {-1}^{k + 1} S_k h_{n - k} } n\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n \paren {S_1 h_{n - 1} - S_2 h_{n - 2} + \cdots S_n h_0}\)









for $n \ge 1$.


Proof 1
Outline
The proof is divided into three cases: $k < n$, $k = n$ and $k > n$.
The tools are Viète's Formulas, Recursion Property of Elementary Symmetric Function, telescoping sums and  homogeneous functions of degree $k$.


Proof 2
Outline
Calculus is used to prove identities (1) and (2) in a single effort. 
The tools are Viète's Formulas, the calculus derivative of powers $x^n$ and logarithm $\ln \size x$, Maclaurin series expansion coefficients, mathematical induction, and Leibniz's Rule in One Variable.


Lemma 1













\(\ds \prod_{r \mathop = 1}^n  \paren {1 + x_r z}\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n {\map {e_m} X} z^m\)










Proof of Lemma 1
Begin with:




\(\text {(11)}: \quad\)









\(\ds \prod_{r \mathop = 1}^n  \paren {x - x_r}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \paren {-1}^{n - i} {\map {e_{n - i} } X} x^i\)





Viète's Formulas



Change variables in $(11)$: 

$x = -1/z$
Details: Generating Function for Elementary Symmetric Function.
$\Box$


Lemma 2
Denote by $D^k \map f z$ the $k$th derivative of $\map f z$.
Let:














\(\ds \map G z\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + x_k z}\)





as in Lemma 1














\(\ds \map F z\)

\(=\)







\(\ds \dfrac {\map {DQ} z} {\map Q z}\)





the calculus derivative of $\ln \size {\map Q z}$



Then:




\(\text {(12)}: \quad\)









\(\ds \dfrac {D^m \map G 0} {m!}\)

\(=\)







\(\ds \map {e_m } X\)










\(\text {(13)}: \quad\)









\(\ds \dfrac {D^m \map F 0} {m!}\)

\(=\)







\(\ds \paren {-1}^m \map {p_{m + 1} } X\)










Proof of Lemma 2














\(\ds \map G z\)

\(=\)







\(\ds \sum_{m \mathop = 0}^n {\map {e_m} X} z^m\)





by Lemma 1



Then identity $(12)$ holds by Maclaurin series expansion applied to polynomial $G$.
Identity $(13)$ will be proved after mathematical induction establishes $(14)$ infra. 
Let $\map {\mathbf P} m$ be the statement:




\(\text {(14)}: \quad\)









\(\ds D^m \map F z\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac{ m!\paren {-1}^m  x_i^{m+1} }{ \paren { 1 + x_i z }^{m+1} }\)





for $m \ge 0$



Basis for the induction: $m=0$
By calculus and the definition of $G$:














\(\ds \map F z\)

\(=\)







\(\ds \dfrac { D \map Q z}{\map Q z}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac { x_i }{ 1 + x_i z }\)









Then $\map {\mathbf P} 0$ is true.
Induction step $\map {\mathbf P} m$ implies $\map {\mathbf P} {m+1}$:














\(\ds D^{m + 1} \map F z\)

\(=\)







\(\ds \map D {\sum_{i \mathop = 1}^n \dfrac {m! \paren {-1}^m  x_i^{m + 1} } {\paren {1 + x_i z}^{m + 1} } }\)





by induction hypothesis $\map {\mathbf P} m$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \dfrac{ m! \paren {-1}^m x_i^{m + 1} \paren {-1} \paren {m + 1} x_i} {\paren {1 + x_i z}^{m + 2} }\)





Power Rule for Derivatives: $\dfrac {\d u^{-n} } {\d z } = \paren {-n} u^{-n - 1} \dfrac {\d u} {\d z}$



Simplify to prove $\map {\mathbf P} {m + 1}$ is true. 
The induction is complete.
To prove equation (13), first let $z = 0$ in equation (14). 
Divide by $m!$ to isolate $\map {p_{m + 1} } X$, which proves (13).
$\Box$


Lemma 3



\(\text {(15)}: \quad\)









\(\ds \paren {m + 1} \map {e_{m + 1} } X\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m \paren {-1}^r {\map {e_{m - r} } X} {\map {p_{r + 1} } X}\)





for $m \ge 0$




Proof of Lemma 3
Begin with $D \map G z = {\map F z} {\map G z}$ and differentiate $m$ times on variable $z$:














\(\ds D^{m + 1} \map G z\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m {\dbinom m r} D^r {\map F z} D^{m - r} {\map G z}\)





Leibniz's Rule in One Variable














\(\ds D^{m + 1} {\map G 0}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m \dbinom m r r! \paren {-1}^r {\map {p_{r + 1} } X} \paren {m - r}! \map {e_{m-r} } X\)





Evaluate at $ z = 0$ and use equations (12) and (13) in Lemma 2














\(\ds \paren {m + 1} {\map {e_m} X}\)

\(=\)







\(\ds \sum_{r \mathop = 0}^m  \paren {-1}^r {\map {e_{m-r} } X} {\map {p_{r+1} } X}\)





Use (12), then collect factorials and simplify



$\Box$

Proof of the Theorem
To prove (1), start with equation (15) in Lemma 3.
Change indices via equations $m + 1 = k$, $r + 1 = i$. 
The summation is from $i = 0 + 1$ to $i = m + 1$, which gives range $i = 1$ to $k$. 
Subscript $m - r$ equals $k - 1- i + 1$, which simplifies to $k - i$.
Then:




\(\text {(16)}: \quad\)









\(\ds k \map {e_k} X\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{k} \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





for $k \ge 1$, which is equation (1)



To prove (2), assume $k > n \ge 1$ and $X = \set {x_1, \ldots, x_n}$.
Equation (16) implies:




\(\text {(17)}: \quad\)









\(\ds 0\)

\(=\)







\(\ds k \map {e_{k} } X\)





because $ \map {e_j} X = 0$ for $j = n + 1, \ldots, k$.








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





by (16) for $k \ge 1$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \sum_{i \mathop = k - n}^k \paren {-1}^{i - 1} {\map {e_{k - i} } X} {\map {p_i} X}\)





because $ \map {e_{k - i} } X = 0$ when $n + 1 \le k - i \le k$



Then (2) holds.
$\blacksquare$


Examples
Order $1$
$\ds \sum_{a \mathop \le i \mathop \le b} x_i = S_1$
where:

$\ds S_r := \sum_{k \mathop = a}^b {x_k}^r$


Order $2$
$\ds \sum_{a \mathop \le i \mathop < j \mathop \le b} x_i x_j = \dfrac 1 2 \paren {\paren {\sum_{i \mathop = a}^b x_i}^2 - \paren {\sum_{i \mathop = a}^b {x_i}^2} }$


Order $3$
$\ds \sum_{a \mathop \le i \mathop < j \mathop < k \mathop \le b} x_i x_j x_k = \dfrac { {S_1}^3} 6 - \dfrac {S_1 S_2} 2 + \dfrac {S_3} 3$
where:

$\ds S_r := \sum_{k \mathop = a}^b {x_k}^r$


Order $4$
$\ds \sum_{a \mathop \le j_1 \mathop < j_2 \mathop < j_3 \mathop < j_4 \mathop \le b} x_{j_1} x_{j_2} x_{j_3} x_{j_4} = \dfrac { {S_1}^4} {24} - \dfrac { {S_1}^2 S_2} 4 + \dfrac { {S_2}^2} 8 + \dfrac {S_1 S_3} 3 - \dfrac {S_4} 4$
where:

$\ds S_r := \sum_{k \mathop = a}^b {x_k}^r$.


Also known as
The Newton-Girard Identities are also known as:

the Newton-Girard formulas
Newton's identities
although the latter name is generally used to refer to a simplified and more specialised set of identities.


Source of Name
This entry was named for Isaac Newton and Albert Girard.


Historical Note
The Newton-Girard Identities were discovered by Albert Girard in $1629$.
Isaac Newton rediscovered them for himself in $1666$, apparently not having known about Girard's work.
He published them in his Arithmetica Universalis of $1707$.


Sources
1629: Albert Girard: Invention Nouvelle en l'Algèbre
1720: Isaac Newton and Edm. Halley: Universal Arithmetick, Or, A Treatise of Arithmetical Composition and Resolution
1930: H. Gray Funkhouser: A Short Account of the History of Symmetric Functions of Roots of Equations (American Mathematical Monthly Vol. 37, no. 7: pp. 357 – 365)  www.jstor.org/stable/2299273
1959: George Baker: A New Derivation of Newton’s Identities and Their Application to the Calculation of the Eigenvalues of a Matrix (Journal of the SIAM Vol. 7, no. 2: pp. 143 – 148)
1968: J.A. Eidswick: A Proof of Newton’s Power Sum Formulas (American Mathematical Monthly Vol. 75, no. 4: pp. 396 – 397)  www.jstor.org/stable/2313436
1992: D.G. Mead: Newton's Identities (American Mathematical Monthly Vol. 99, no. 8: pp. 749 – 751)  www.jstor.org/stable/2324242
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.): $\S 1.2.9$: Generating Functions: Exercise $10$
2000: Dan Kalman: A Matrix Proof of Newton's Identities (Mathematics Magazine Vol. 73, no. 4: pp. 313 – 315)  www.jstor.org/stable/2690982
2001: Jean-Pierre Tignol: Galois' Theory of Algebraic Equations
2018: Kent D. Boklan: A note on identities for elementary symmetric and power sum polynomials (Discrete Mathematics, Algorithms and Applications Vol. 10: pp. 1 – 5)
Weisstein, Eric W. "Newton-Girard Formulas." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Newton-GirardFormulas.html.html




