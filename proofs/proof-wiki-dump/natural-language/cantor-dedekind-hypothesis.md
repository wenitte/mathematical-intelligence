# 

Source: https://proofwiki.org/wiki/Cantor-Dedekind_Hypothesis



Theorem
The points on an infinite straight line are in one-to-one correspondence with the set $\R$ of real numbers.

Hence the set of all points on an infinite straight line and $\R$ are equinumerous.


Proof
Step 1
We will show that there exists a mapping from the infinite straight line $L$ to the set of real numbers $\R$.
Let us establish a relation $h$ between points on $L$ and elements of $\R$.
We allow the Axiom of Choice to set up a choice function to allow the points of $L$ to be selected systematically.

Pick any point on $L$, and label it $z$. This point can be referred to informally as the origin.
Map $z$ to zero, that is, by allowing $\tuple {z, 0} \in h$. 

Using the choice function pick any other point on $L$.
From Euclid's first postulate, we can draw a line segment between the two points.
If the second point is to the right of the origin, let its length be positive.
If the second point is to the left of the origin, let its length be negative.
The existence of the choice function allows that this process can be done for any point on $L$
Hence:

$\forall p \in L: \exists x \in \R: \tuple {p, x} \in h$
That is, $h$ is left-total.
The method of construction of $h$ is such that every point on $L$ is assigned to exactly one element of $\R$.
Thus it is seen that $h$ is many-to-one.
Hence, by definition, $h$ is a mapping.
Since every point mapped to is associated to exactly one element of $L$, $h$ is injective.
$\Box$


Step 2
Now we need to demonstrate that there exists a mapping from $\R$ to $L$.
Let us establish a relation $h$ between elements of $\R$ and points on $L$.
We allow the Axiom of Choice to set up a choice function to allow the elements of $\R$ to be selected systematically.

Pick any point on $L$, and label it $z$.
Map zero to $z$ that is, by allowing $\tuple {0, z} \in g$. 

Using the choice function pick any other element $x$ of $\R$.
Suppose $x$ is positive. 
Then let the image of $x$ be a point to the right of the origin.
Define the magnitude of its position vector be the absolute value of $x$.
Suppose $x$ is negative. 
Then let the image of $x$ be a point to the left of the origin.
Define the magnitude of its position vector be the absolute value of $x$ multiplied by $-1$.
The union of all such images, with the zero vector from $z$ to $z$, is the infinite straight line.
By the method of construction, there exists a point on $L$ for all elements of $\R$, the relation $g$ is left-total.
The method of construction of $g$ is also such that every element of $\R$ is assigned to exactly one point on $L$.
Thus it is seen that $g$ is many-to-one.
Hence, by definition, $g$ is a mapping.
Since every element of $L$ mapped to is associated to exactly one point on $\R$, $g$ is injective.
$\Box$


Step 3
Since:

$h: L \hookrightarrow \R$ is an injection
$g: \R \hookrightarrow L$ is an injection
by the Cantor-Bernstein-Schröder Theorem, there exists a one-to-one mapping between them.
Hence by definition, $L$ and $\R$ are equinumerous.

$\blacksquare$
This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article, or a section of it, needs explaining.In particular: From a careful study of the discussion in the talk page, I suspect that we may need to assume and invoke an axiom of Alfred Tarski's.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also see
Real Number Plane


Source of Name
This entry was named for Georg Cantor and Richard Dedekind.


Sources
1919: Horace Lamb: An Elementary Course of Infinitesimal Calculus (3rd ed.) ... (previous) ... (next): Chapter $\text I$. Continuity: $1$. Continuous Variation
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) $\S 5.30-33$
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $2 \text A$: The Meaning of the Term Set
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cantor-Dedekind hypothesis
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Dedekind cut
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cantor-Dedekind hypothesis
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Dedekind cut




