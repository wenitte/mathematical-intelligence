# 

Source: https://proofwiki.org/wiki/Order_of_Product_of_Entire_Function_with_Polynomial

Theorem
Let $f: \C \to \C$ be an entire function of order $\omega$.
Let $P: \C \to \C$ be a nonzero polynomial.

Then $f \cdot P$ has order $\omega$.


Proof
If $f=0$, then $f \cdot P = 0$.
Thus the claim is trivial.
Therefore suppose that $f$ is not identically zero.

By Order of Product of Entire Functions and Polynomial has Order Zero, $f\cdot P$ has order at most $\omega$.
By Limit at Infinity of Polynomial, there exist $r, \delta > 0$ such that $\size {\map P z} \ge \delta$ for $\size z \ge r$.
Aiming for a contradiction, suppose $\ds \map \log {\max_{\size z \mathop \le R} \size {\map f z \map P z} } = \map \OO {R^\beta}$ for some $\beta < \omega$.
By the Maximum Modulus Principle:

$\ds \max_{\size z \mathop \le R} \size {\map f z} \le \dfrac 1 \delta \max_{\size z \mathop \le R} \size {\map f z \map P z}$
for $R \ge r$.
Thus:

$\ds \map \log {\max_{\size z \mathop \le R} \size {\map f z} } = \map \OO {R^\beta}$
By Definition 2 of Order of Entire Function, this means:

$\omega \le \beta$
This is a contradiction.
Thus $f \cdot P$ has order $\omega$.
$\blacksquare$


Also see
Order of Product of Entire Functions
Polynomial has Order Zero




