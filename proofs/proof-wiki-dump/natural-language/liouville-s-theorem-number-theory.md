# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Number_Theory)



Theorem
Let $x$ be an irrational number that is algebraic of degree $n$.
Then there exists a constant $c > 0$ (which can depend on $x$) such that:

$\size {x - \dfrac p q} \ge \dfrac c {q^n}$
for every pair $p, q \in \Z$ with $q \ne 0$.


Corollary
Liouville numbers are transcendental.


Proof
Let $r_1, r_2, \ldots, r_k$ be the rational roots of a polynomial $P$ of degree $n$ that has $x$ as a root.
Since $x$ is irrational, it does not equal any $r_i$. 
Let $c_1 > 0$ be the minimum of $\size {x - r_i}$.
If there are no $r_i$, let $c_1 = 1$.
Now let $\alpha = \dfrac p q$ where $\alpha \notin \set {r_1, \ldots, r_k}$. 
Then:














\(\ds \map P \alpha\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map P \alpha}\)

\(\ge\)







\(\ds \frac 1 {q^n}\)





as $\map P \alpha$ is a multiple of $\dfrac 1 {q^n}$








\(\ds \leadsto \ \ \)





\(\ds \size {\map P x - \map P \alpha}\)

\(\ge\)







\(\ds \frac 1 {q^n}\)





because $\map P x = 0$



Suppose:

$\ds \map P x = \sum_{k \mathop = 0}^n a_k x^k$
Then:














\(\ds \map P x - \map P \alpha\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n a_k x^k - \sum_{k \mathop = 0}^n a_k \alpha^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n a_k \paren {x^k - \alpha^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {x^k - \alpha^k}\)





$x^0 - \alpha^0 = 0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n a_k \paren {x - \alpha} \sum_{i \mathop = 0}^{k - 1} x^{k - 1 - i} \alpha^i\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds \paren {x - \alpha} \sum_{k \mathop = 1}^n a_k \sum_{i \mathop = 0}^{k - 1} x^{k - 1 - i} \alpha^i\)










Case 1: Let $\size {x - \alpha} \le 1$.
Then:














\(\ds \size \alpha - \size x\)

\(\le\)







\(\ds \size {x - \alpha}\)





Reverse Triangle Inequality








\(\ds \leadsto \ \ \)





\(\ds \size \alpha - \size x\)

\(\le\)







\(\ds 1\)





Transitive








\(\ds \leadsto \ \ \)





\(\ds \size \alpha\)

\(\le\)







\(\ds \size x + 1\)





rearranging




Therefore:














\(\ds \size {\map P x - \map P \alpha}\)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k} \sum_{i \mathop = 0}^{k - 1} \size {x^{k - 1 - i} \alpha^i}\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k} \sum_{i \mathop = 0}^{k - 1} \size {x^{k - 1 - i} \paren {\size x + 1}^i}\)





substituting $\size x + 1$ for $\alpha$














\(\ds \)

\(\le\)







\(\ds \size {x - \alpha}\sum_{k \mathop = 1}^n \size {a_k} \sum_{i \mathop = 0}^{k - 1} \size {x^{k - 1} \paren {\frac {\size x + 1} x}^i}\)





moving $ x^{-i}$ over














\(\ds \)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k x^{k - 1} } \sum_{i \mathop = 0}^{k - 1} \size {\paren {1 + \frac 1 x}^i}\)





moving $x^{k - 1}$ out of the sum














\(\ds \)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k x^{k - 1} } \frac {\paren {1 + \frac 1 x}^k - 1} {\paren {1 + \frac 1 x} - 1}\)





Sum of Geometric Sequence














\(\ds \)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k x^k} \paren {\paren {1 + \frac 1 x}^k - 1}\)




















\(\ds \)

\(\le\)







\(\ds \size {x - \alpha} \sum_{k \mathop = 1}^n \size {a_k} \paren {\paren {\size x + 1}^k - \size x^k}\)





Distribute



To summarize:

$\size {\map P x - \map P \alpha} \le \size {x - \alpha} c_x$
where:

$\ds c_x = \sum_{k \mathop = 1}^n \size {a_k} \paren {\paren {\size x + 1}^k - \size x^k}$
So for such $\alpha$:

$\size {x - \alpha} \ge \dfrac {\size {\map P x - \map P \alpha} } {c_x} \ge \dfrac 1 {c_x q^n}$
$\Box$

Case 2: Let $\size {x - \alpha} > 1$.
Then:

$\size {x - \alpha} > 1 \ge \dfrac 1 {q^n}$
$\blacksquare$


Examples
Example: $\sqrt 2$
Applying Liouville's Theorem (Number Theory) to $\sqrt 2$:

$\size {\sqrt 2 - \dfrac p q} \ge \dfrac c {q^2} \implies 0 \lt c \le 6 - 4 \sqrt 2$
for every pair $p, q \in \Z$ with $q \ne 0$.


Also see
Definition:Liouville Number


Source of Name
This entry was named for Joseph Liouville.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.18$: Algebraic and Transcendental Numbers. $e$ is Transcendental




