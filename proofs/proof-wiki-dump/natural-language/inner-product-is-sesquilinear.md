# 

Source: https://proofwiki.org/wiki/Inner_Product_is_Sesquilinear

Theorem
Let $\mathbb F$ be a subfield of $\C$. 
Let $V$ be a inner product space over $V$ with inner product $\innerprod \cdot \cdot$. 
Define the $f : V \times V \to \mathbb F$ by: 

$\map f {x, y} = \innerprod x y$
for each $x, y \in V$. 

Then $f$ is sesquilinear.


Proof
Let $\alpha \in \mathbb F$. 
Let $x_1, x_2, y \in V$. 
By the definition of the inner product, $f$ is linear in its first argument.
So, we have: 

$\innerprod {\alpha x_1 + x_2} y = \alpha \innerprod {x_1} y + \innerprod {x_2} y$
From the definition of the inner product, we also have that $f$ is conjugate symmetric, so: 














\(\ds \innerprod y {\alpha x_1 + x_2}\)

\(=\)







\(\ds \overline {\innerprod {\alpha x_1 + x_2} y}\)




















\(\ds \)

\(=\)







\(\ds \overline {\alpha \innerprod {x_1} y + \innerprod {x_2} y}\)




















\(\ds \)

\(=\)







\(\ds \overline {\alpha \innerprod {x_1} y} + \overline {\innerprod {x_2} y}\)





Sum of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \overline \alpha \overline {\innerprod {x_1} y} + \overline {\innerprod {x_2} y}\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod y {x_1} + \innerprod y {x_2}\)





using the conjugate symmetry of the inner product



So we have: 

$\innerprod {\alpha x_1 + x_2} y = \alpha \innerprod {x_1} y + \innerprod {x_2} y$
and:

$\innerprod y {\alpha x_1 + x_2} = \overline \alpha \innerprod y {x_1} + \innerprod y {x_2}$
for $\alpha \in \mathbb F$ and $x_1, x_2, y \in V$. 
So $f$ is sesquilinear.
$\blacksquare$





