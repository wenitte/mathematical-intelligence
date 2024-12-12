# 

Source: https://proofwiki.org/wiki/Darboux%27s_Theorem



Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Let $\ds \int_a^b \map f x \rd x$ be the definite integral of $\map f x$ over $\closedint a b$.

Then:

$\ds m \paren {b - a} \le \int_a^b \map f x \rd x \le M \paren {b - a}$
where:

$M$ is the maximum of $f$
$m$ is the minimum of $f$
on $\closedint a b$.


Corollary
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Suppose that $\forall t \in \closedint a b: \size {\map f t} < \kappa$.

Then:

$\ds \forall \xi, x \in \closedint a b: \size {\int_x^\xi \map f t \rd t} < \kappa \size {x - \xi}$


Proof
This follows directly from the definition of definite integral:
From Continuous Image of Closed Interval is Closed Interval it follows that $m$ and $M$ both exist.
The closed interval $\closedint a b$ is a finite subdivision of itself.
By definition, the upper Darboux sum is $M \paren {b - a}$, and the lower Darboux sum is $m \paren {b - a}$.
The result follows.
$\blacksquare$


Source of Name
This entry was named for Jean-Gaston Darboux.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Darboux's theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integrability
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Darboux's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integrability




