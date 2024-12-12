# 

Source: https://proofwiki.org/wiki/Condition_for_Straight_Lines_in_Plane_to_be_Parallel/General_Equation



Theorem
Let $L: \alpha_1 x + \alpha_2 y = \beta$ be a straight line in $\R^2$.

Then the straight line $L'$ is parallel to $L$ if and only if there is a $\beta' \in \R^2$ such that:

$L' = \set {\tuple {x, y} \in \R^2: \alpha_1 x + \alpha_2 y = \beta'}$


Proof
Necessary Condition
When $L' = L$, the claim is trivial.
Let $L' \ne L$ be described by the equation:

$\alpha'_1 x + \alpha'_2 y = \beta'$
Without loss of generality, let $\alpha'_1 \ne 0$ (the case $\alpha'_2 \ne 0$ is similar).

Then for $\tuple {x, y} \in L'$ to hold, one needs:














\(\ds \alpha'_1 x + \alpha'_2 y\)

\(=\)







\(\ds \beta'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {-\alpha'_2} {\alpha'_1} y + \frac {\beta'} {\alpha'_1}\)










For $L'$ to be parallel to $L$, it is required that then $\tuple {x, y} \notin L$, that is:














\(\ds \alpha_1 x + \alpha_2 y\)

\(\ne\)







\(\ds \beta\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \alpha_1 \paren {\frac {-\alpha'_2} {\alpha'_1} y + \frac {\beta'} {\alpha'_1} } + \alpha_2 y\)

\(\ne\)







\(\ds \beta\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\alpha_2 - \alpha_1 \frac {\alpha'_2} {\alpha'_1} } y + \alpha_1 \frac {\beta'} {\alpha'_1}\)

\(\ne\)







\(\ds \beta\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\alpha_2 - \alpha_1 \frac {\alpha'_2} {\alpha'_1} } y\)

\(\ne\)







\(\ds \beta - \alpha_1 \frac {\beta'} {\alpha'_1}\)










It follows that necessarily $\beta - \alpha_1 \frac {\beta'} {\alpha'_1} \ne 0$, or taking $y = 0$ would yield equality.
The only remaining way to obtain the desired inequality for all $y$ is that:

$\alpha_2 - \alpha_1 \dfrac {\alpha'_2} {\alpha'_1} = 0$
One observes that now $\alpha_1 = 0 \implies \alpha_2 = 0$.
However, as $L: \alpha_1 x + \alpha_2 y = \beta$ is a straight line in $\R^2$, it cannot be that $\alpha_1 = \alpha_2 = 0$.
So $\alpha_1 \ne 0$, and one finds:

$\alpha'_2 = \dfrac {\alpha'_1} {\alpha_1} \alpha_2$
Hence obtain:














\(\ds \alpha'_1 x + \alpha'_2 y\)

\(=\)







\(\ds \beta'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {\alpha'_1} {\alpha_1} \paren {\alpha_1 x + \alpha_2 y}\)

\(=\)







\(\ds \beta'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \alpha_1 x + \alpha_2 y\)

\(=\)







\(\ds \beta' \frac {\alpha_1} {\alpha'_1}\)










That is, $L'$ is described by an equation of the required form.
$\Box$


Sufficient Condition
Let $L' \ne L$ be a straight line given by the equation:

$\alpha_1 x + \alpha_2 y = \beta'$
Aiming for a contradiction, suppose we have a point $\mathbf x = \tuple {x, y} \in L \cap L'$.
Then, as $\mathbf x \in L$, it also satisfies:

$\alpha_1 x + \alpha_2 y = \beta$
It follows that $\beta = \beta'$, so $L = L'$.
This contradiction shows that $L \cap L' = \O$, that is, $L$ and $L'$ are parallel.

The remaining case is when $L' = L$. 
By definition, $L$ is parallel to itself. 
The result follows.
$\blacksquare$


Also see
Condition for Planes to be Parallel


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $5$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text V$: Vector Spaces: $\S 28$: Linear Transformations




