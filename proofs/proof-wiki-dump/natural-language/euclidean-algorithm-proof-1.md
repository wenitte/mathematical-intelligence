# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Proof_1



Algorithm
The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two integers $a$ and $b$.

Let $a, b \in \Z$ and $a \ne 0 \lor b \ne 0$.
The steps are:

$(1): \quad$ Start with $\tuple {a, b}$ such that $\size a \ge \size b$. If $b = 0$ then the task is complete and the GCD is $a$.
$(2): \quad$ If $b \ne 0$ then you take the remainder $r$ of $\dfrac a b$.
$(3): \quad$ Set $a \gets b, b \gets r$ (and thus $\size a \ge \size b$ again).
$(4): \quad$ Repeat these steps until $b = 0$.
Thus the GCD of $a$ and $b$ is the value of the variable $a$ after the termination of the algorithm.


Proof
Suppose $a, b \in \Z$ and $a \lor b \ne 0$.
From the Division Theorem, $a = q b + r$ where $0 \le r < \size b$.
From GCD with Remainder, the GCD of $a$ and $b$ is also the GCD of $b$ and $r$.

Therefore, we may search instead for $\gcd \set {b, r}$.
Since $\size r < \size b$ and $b \in \Z$, we will reach $r = 0$ after finitely many steps.
At this point, $\gcd \set {r, 0} = r$ from GCD with Zero.
$\blacksquare$


Source of Name
This entry was named for Euclid.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 11$. Highest Common Factor




