# 

Source: https://proofwiki.org/wiki/Napoleon%27s_Theorem/Variant_1



Theorem
Let $\triangle ABC$ be an arbitrary triangle.
Let $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$ be equilateral triangles constructed on $AB$, $BC$ and $AC$ respectively toward the interior of $\triangle ABC$.
Let $O_1$, $O_2$ and $O_3$ be the incenters of $\triangle ABF$, $\triangle ACE$ and $\triangle BCD$ respectively.
Then $\triangle O_1 O_2 O_3$ is an equilateral triangle.




Proof
Lemma $1$
Let $T = \triangle ABC$ be an equilateral triangle in the Cartesian plane $\CC$.
Let the sides of $\triangle ABC$ be the vectors $\mathbf u$, $\mathbf v$, and $\mathbf w$.
Let the interior of $T$ lie to the left of the vector path.
Let $\mathbf v$ be rotated by an angle of $60 \degrees$ anticlockwise.
Let the rotated vector be $\mathbf v'$.
Then:

$\mathbf u + \mathbf v' = \mathbf 0$
where $\mathbf 0$ denotes the zero vector.
$\Box$


Lemma $2$
Let $T = \triangle ABC$ be an equilateral triangle in the plane $\CC$.
Let $\mathbf{v}$ be a vector in $\CC$ with magnitude $\dfrac 1 3 \norm {AB}$ and direction $\vec {BA}$.
Let a unit rotation be anticlockwise by $60^{\circ}$, and denote vector $\mathbf{v}$ after this rotation as $\mathbf{v}'$.
Then the vector path from $B$ to the incenter $O$ of $T$ is $\mathbf{v} + -\mathbf{v}' '$ and the vector path from the incenter $O$ to $A$ is $\mathbf{v}' + \mathbf{v}$.
$\Box$
The notation differs for the variant Theorem:  $O_1$ is now $O_3$ and $O_3$ is now $O_1$. 
We will use vectors in the same order as in Napoleon's Theorem/Proof 2, starting with $\mathbf{a}$.
As a result, the vector path will be clockwise, some small adjustments will be necessary..

Vectors
Side $a = BC$ lies opposite vertex $A$ of $\triangle ABC$.
Let the vector $\mathbf{a}$ have magnitude $\dfrac 1 3 a$ in the direction of $\vec {BC}$.
$O_3$ is the incenter of the $\triangle BCD$ with side $a$ from $\triangle ABC$.

Side $b = CA$ lies opposite vertex $B$ of $\triangle ABC$.
Let the vector $\mathbf{b}$ have magnitude $\dfrac 1 3 b$ in the direction of $\vec {CA}$.
$O_2$ is the incenter of the $\triangle CAE$ with side $b$ from $\triangle ABC$.

Side $c = AB$ lies opposite vertex $C$ of $\triangle ABC$.
Let the vector $\mathbf{c}$ have magnitude $\dfrac 1 3 c$ in the direction of $\vec {AB}$ from $\triangle ABC$.
$O_1$ is the incenter of the $\triangle ABF$ with side $c$


Construction of Vector Paths
Let $\mathbf{p}$ be the vector path from $O_3$ to $O_2$ through vertex $C$.
Note that the equilateral triangles are reflected.  This makes the assignment of path elements different.
By Lemma $2$:

The first part of $\mathbf{p}$ from $O_3$ to $C$ is $- \mathbf{a}' ' + \mathbf{a}$.
Also by Lemma $2$:

The second part of $\mathbf{p}$ from $C$ to $O_2$ is $\mathbf{b} + \mathbf{b}'$.
By addition:

$\mathbf{p} = - \mathbf{a}' ' + \mathbf{a} + \mathbf{b} + \mathbf{b}'$



Let $\mathbf{q}$ be the vector path from $O_2$ to $O_1$ through vertex $A$.
By Lemma $2$:

The first part of $\mathbf{q}$ from $O_2$ to $A$ is $- \mathbf{b}' ' + \mathbf{b}$.
By Lemma $2$:

The second part of $\mathbf{q}$ from $A$ to $O_3$ is $\mathbf{c} + \mathbf{c}'$.
By addition:

$\mathbf{q} = - \mathbf{b}' ' + \mathbf{b} + \mathbf{c} + \mathbf{c}'$


Test for Equilateral Triangle
The test from Lemma $1$ must be modified because the vector path from $O_3$ to $O_2$ to $O_1$ goes clockwise.
Therefore, we construct $\mathbf{p}' + \mathbf{q}$: 


If the result is $\mathbf{p}' + \mathbf{q} = \mathbf{0}$, the two vectors $\mathbf{p}$ and $\mathbf{q}$ are sides of an equilateral triangle.
$\mathbf{p}' = - \mathbf{a}' ' ' + \mathbf{a}' + \mathbf{b}' + \mathbf{b}' '$
By definition of plane rotation and that $\theta = \frac 1 6$ of a complete rotation:

$- \mathbf{a}' ' ' = \mathbf{a}$
Substituting:

$\mathbf{p}' = \mathbf{a} + \mathbf{a}' + \mathbf{b}' + \mathbf{b}' '$

Then:














\(\ds \mathbf{p'} + \mathbf{q}\)

\(=\)







\(\ds \mathbf{a} + \mathbf{a}' + \mathbf{b}' + \mathbf{b}' ' + - \mathbf{b}' ' + \mathbf{b} + \mathbf{c} + \mathbf{c}'\)





Addition














\(\ds \)

\(=\)







\(\ds \mathbf{a} + \mathbf{a}' + \mathbf{b}' + \mathbf{b} + \mathbf{c} + \mathbf{c}'\)





Cancel terms














\(\ds \)

\(=\)







\(\ds \mathbf{a} + \mathbf{b} + \mathbf{c}\)





Vector Sum of Rotated Triangle is Zero














\(\ds \)

\(=\)







\(\ds \mathbf{0}\)





Vector Sum of Triangle is Zero



The result follows.
$\blacksquare$


Source of Name
This entry was named for Napoleon Bonaparte.


Historical Note
The attribution of Napoleon's Theorem to Napoleon Bonaparte is in fact dubious.
An early appearance is by William Rutherford in $1825$.
An earlier appearance is in one of the papers for candidates for the Gold Medal in the General Examination of the University of Dublin in October $1820$.
It is known that Napoleon Bonaparte did have some understanding of mathematics, so the suggestion that he may have discovered this theorem is not impossible.
It is rediscovered over and over again by enthusiastic amateurs.


Sources
1991: David Wells: Curious and Interesting Geometry ... (previous) ... (next): Napoleon's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Napoleon's theorem




