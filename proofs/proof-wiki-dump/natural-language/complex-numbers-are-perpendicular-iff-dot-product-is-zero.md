# 

Source: https://proofwiki.org/wiki/Complex_Numbers_are_Perpendicular_iff_Dot_Product_is_Zero



Theorem
Let $z_1$ and $z_2$ be complex numbers in vector form such that $z_1 \ne 0$ and $z_2 \ne 0$.
Then $z_1$ and $z_2$ are perpendicular if and only if:

$z_1 \circ z_2 = 0$
where $z_1 \circ z_2$ denotes the complex dot product of $z_1$ with $z_2$.


Proof
By definition of complex dot product:

$z_1 \circ z_2 = \cmod {z_1} \, \cmod {z_2} \cos \theta$
$\cmod {z_1}$ denotes the complex modulus of $z_1$
$\theta$ denotes the angle from $z_1$ to $z_2$, measured in the positive direction.


Necessary Condition
Let $z_1$ and $z_2$ be perpendicular.
Then either $\theta = 90^\circ$ or $\theta = 270^\circ$.
Either way, from Cosine of Right Angle or Cosine of Three Right Angles:

$\cos \theta = 0$
and so:

$\cmod {z_1} \, \cmod {z_2} \cos \theta = 0$
Hence by definition:

$z_1 \circ z_2 = 0$
$\Box$


Sufficient Condition
Let $z_1 \circ z_2 = 0$.
Then by definition:

$\cmod {z_1} \, \cmod {z_2} \cos \theta = 0$
As neither $z_1 = 0$ or $z_2 = 0$ it follows that $\cos \theta = 0$.
From Cosine of Half-Integer Multiple of Pi it follows that either:

$\theta = 90^\circ$
$\theta = 270^\circ$
or:

$\theta$ is either of the above plus a full circle.
That is, $z_1$ and $z_2$ are perpendicular.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Dot and Cross Product: $1.$




