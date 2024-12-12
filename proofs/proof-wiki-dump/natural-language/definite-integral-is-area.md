# 

Source: https://proofwiki.org/wiki/Definite_Integral_is_Area


It has been suggested that this page or section be merged into Area under Curve.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $f : \closedint a b \to \R$ be Darboux integrable over $\closedint a b$.
Let $A$ be the total signed area between $\map f x$ and the $x$-axis, and between the lines $x = a$ and $x = b$.
Then $A$ equals the Darboux integral of $f$ over $\closedint a b$.


Proof
Lemma
Let $f : \closedint a b \to \R_{\mathop \ge 0}$ be non-negative and Darboux integrable over $\closedint a b$.
Let $G$ be the point set of $\tuple {x, y}$ such that $a \le x \le b$ and $0 \le y \le \map f x$.
Let $A$ be the area of $G$, which is colloquially called the area under the curve.
Then $A$ equals the Darboux integral of $f$ over $\closedint a b$.
$\Box$

Define $f^+$ and $f^-$ to be the positive and negative parts of $f$, respectively.
Let $A^+$ be the area under $\map {f^+} x$ on $\closedint a b$.
Let $A^-$ be the area under $\map {f^-} x$ on the same interval.

By Positive Part of Darboux Integrable Function is Integrable and its corollary for the negative part,
$f^+$ and $f^-$ are Darboux integrable over $\closedint a b$.
By the lemma, $A^+$ and $A^-$ are equal to the Darboux integral over their respective parts.
Therefore:














\(\ds A\)

\(=\)







\(\ds A^+ - A^-\)





Definition of Signed Area














\(\ds \)

\(=\)







\(\ds \int_a^b \map {f^+} x \rd x - \int_a^b \map {f^-} x \rd x\)





Lemma














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map {f^+} x - \map {f^-} x} \rd x\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_a^b \map f x \rd x\)





Difference of Positive and Negative Parts



$\blacksquare$





