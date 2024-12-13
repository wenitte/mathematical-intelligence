# 

Source: https://proofwiki.org/wiki/Napoleon%27s_Theorem/Proof_2


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\triangle ABC$ be an arbitrary triangle.
Let $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$ be equilateral triangles constructed on $AB$, $BC$ and $AC$ respectively on the exterior of $\triangle ABC$.
Let $O_1$, $O_2$ and $O_3$ be the incenters of $\triangle ABF$, $\triangle BCD$ and $\triangle ACE$.
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


Vectors
Side $a = BC$ lies opposite vertex $A$ of $\triangle ABC$.
Let the vector $\mathbf{a}$ have magnitude $\dfrac 1 3 a$ in the direction of $\vec {BC}$.
$O_1$ is the incenter of the $\triangle BCD$ with side $a$ from $\triangle ABC$.

Side $b = CA$ lies opposite vertex $B$ of $\triangle ABC$.
Let the vector $\mathbf{b}$ have magnitude $\dfrac 1 3 b$ in the direction of $\vec {CA}$.
$O_2$ is the incenter of the $\triangle CAE$ with side $b$ from $\triangle ABC$.

Side $c = AB$ lies opposite vertex $C$ of $\triangle ABC$.
Let the vector $\mathbf{c}$ have magnitude $\dfrac 1 3 c$ in the direction of $\vec {AB}$.
$O_3$ is the incenter of the $\triangle ABF$ with side $c$ from of $\triangle ABC$.


Construction of Vector Paths
Let $\mathbf{p}$ be the vector path from $O_1$ to $O_2$ through vertex $C$.
By Lemma $2$:

The first part of $\mathbf{p}$ from $O_1$ to $C$ is $\mathbf{a}' + \mathbf{a}$.
Also by Lemma $2$:

The second part of $\mathbf{p}$ from $C$ to $O_2$ is $\mathbf{b} + - \mathbf{b}' '$.
By addition:

$\mathbf{p} = \mathbf{a}' + \mathbf{a} + \mathbf{b} + - \mathbf{b}' '$


Let $\mathbf{q}$ be the vector path from $O_2$ to $O_3$ through vertex $A$.
By Lemma $2$:

The first part of $\mathbf{q}$ from $O_2$ to $A$ is $\mathbf{b}' + \mathbf{b}$.
By Lemma $2$:

The second part of $\mathbf{q}$ from $A$ to $O_3$ is $\mathbf{c} + - \mathbf{c}' '$.
By addition:

$\mathbf{q} = \mathbf{b}' + \mathbf{b} + \mathbf{c} + - \mathbf{c}' '$


Test for Equilateral Triangle
By the test from Lemma $1$, we construct $\mathbf{p} + \mathbf{q}'$: 

If the result is $\mathbf{p} + \mathbf{q}' = \mathbf{0}$, the two vectors $\mathbf{p}$ and $\mathbf{q}$ are sides of an equilateral triangle.


$\mathbf{q}' = \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' - \mathbf{c}' ' '$
By definition of plane rotation and that $\theta = \frac 1 6$ of a complete rotation:

$- \mathbf{c}' ' ' = \mathbf{c}$
Substituting:

$\mathbf{q}' = \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' + \mathbf{c}$

Then:














\(\ds \mathbf{p} + \mathbf{q}'\)

\(=\)







\(\ds \mathbf{a}' + \mathbf{a} + \mathbf{b} - \mathbf{b}' ' + \mathbf{b}' ' + \mathbf{b}' + \mathbf{c}' + \mathbf{c}\)





Addition














\(\ds \)

\(=\)







\(\ds \mathbf{a}' + \mathbf{a} + \mathbf{b} + \mathbf{b}' + \mathbf{c}' + \mathbf{c}\)





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





