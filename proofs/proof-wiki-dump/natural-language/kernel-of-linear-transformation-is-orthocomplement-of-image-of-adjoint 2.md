# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Orthocomplement_of_Image_of_Adjoint



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces.
Let $\map \BB {\HH, \KK}$ denote the set of bounded linear transformations from $\HH$ to $\KK$.
Let $A \in \map \BB {\HH, \KK}$ be a bounded linear transformation.

Then $\ker A = \paren {\Img {A^*} }^\perp$, where:

$A^*$ denotes the adjoint of $A$
$\ker A$ is the kernel of $A$
$\Img {A^*}$ is the image of $A^*$
$\perp$ signifies orthocomplementation


Corollary
Let $A \in \map \BB \HH$ be a normal operator.
Then:

$\ker A = \paren {\Img A}^\perp$


Proof
Let $x \in \HH$ be arbitrary.
First fix $x \in \map \ker A$ and let $y \in \Img {A^\ast}$ be arbitrary.
We then have: 

$y = A^\ast u$
for some $u \in \KK$. 
We have: 

$\innerprod x y_\HH = \innerprod x {A^\ast u}_\HH$
By the definition of the adjoint, we have: 

$\innerprod x y_\HH = \innerprod {A x} u_\KK$
But $x \in \map \ker A$, so:

$\innerprod {A x} u_\KK = 0$
So: 

$\innerprod x y_\HH = 0$ for any $y \in \Img {A^\ast}$.
So:

$x \in \paren {\Img {A^\ast} }^\bot$
So from the definition of set inclusion, we have: 

$\map \ker A \subseteq \paren {\Img {A^\ast} }^\bot$

Now let $x \in \paren {\Img {A^\ast} }^\bot$. 
Then for each $y \in \Img {A^\ast}$ we have: 

$\innerprod x y_\HH = 0$
For each $y \in \Img {A^\ast}$ we can write $y = A^\ast u$ for some $u \in \KK$. 
Then we have: 

$\innerprod x {A^\ast u}_\HH = 0$
for each $u \in \KK$, and so:

$\innerprod {A x} u_\KK = 0$
for each $u \in \KK$ from the definition of the adjoint. 
In particular, we are free to pick $u = A x$.
Then:

$\innerprod {A x} {A x}_\KK = 0$
So $A x = 0$ from the definition of the inner product.
So:

$x \in \ker A$
So, from the definition of set inclusion, we have: 

$\paren {\Img {A^\ast} }^\bot \subseteq \ker A$

Hence by definition of set equality:

$\ker A = \paren {\Img {A^*} }^\perp$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text {II}.2.19$




