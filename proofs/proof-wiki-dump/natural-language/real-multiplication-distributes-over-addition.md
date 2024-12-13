# 

Source: https://proofwiki.org/wiki/Real_Multiplication_Distributes_over_Addition



Theorem
The operation of multiplication on the set of real numbers $\R$ is distributive over the operation of addition:

$\forall x, y, z \in \R:$
$x \times \paren {y + z} = x \times y + x \times z$
$\paren {y + z} \times x = y \times x + z \times x$


Algebraic Proof
From the definition, the real numbers are the set of all equivalence classes $\eqclass {\sequence {x_n} } {}$ of Cauchy sequences of rational numbers.

Let $x = \eqclass {\sequence {x_n} } {}, y = \eqclass {\sequence {y_n} } {}, z = \eqclass {\sequence {z_n} } {}$, where $\eqclass {\sequence {x_n} } {}$, $\eqclass {\sequence {y_n} } {}$ and $\eqclass {\sequence {z_n} } {}$ are such equivalence classes.
From the definition of real multiplication, $x \times y$ is defined as:

$\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n \times y_n} } {}$
From the definition of real addition, $x + y$ is defined as:

$\eqclass {\sequence {x_n} } {} + \eqclass {\sequence {y_n} } {} = \eqclass {\sequence {x_n + y_n} } {}$
Thus:














\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \paren {\eqclass {\sequence {y_n} } {} + \eqclass {\sequence {z_n} } {} }\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n + z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times \paren {y_n + z_n} } } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {\paren {x_n \times y_n} + \paren {x_n \times z_n} } } {}\)





Rational Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {x_n \times y_n} } {} + \eqclass {\sequence {x_n \times z_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \paren {\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {} } + \paren {\eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {z_n} } {} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times z}\)









By Real Addition is Commutative and Real Multiplication is Commutative, it follows that:

$\paren {y + z} \times x = \paren {y \times x} + \paren {z \times x}$
$\blacksquare$


Geometric Proof
In the words of Euclid:

If there be two straight lines, and one of them be cut into any number of segments whatever, the rectangle contained by the two straight lines is equal to the rectangles contained by the uncut straight line and each of the segments.
(The Elements: Book $\text{II}$: Proposition $1$)



Let $A$ and $BC$ be two straight lines.
Let $BC$ be cut at random at points $D$ and $E$.
Then the rectangle contained by $A$ and $BC$ is equal to the sum of the rectangles contained by $A$ and $BD$, by $A$ and $DE$, and by $A$ and $EC$, as follows:

Construct $BF$ perpendicular to $BC$.
Construct $BG$ on $BF$ equal to $A$.
Construct $GH$ through $G$ parallel to $BC$.
Construct $DK, EL, CH$ through $D, E, C$ parallel to $BG$.

Then we have that:

$\Box BCHG = \Box BDKG + \Box DELK + \Box ECHL$

Now $\Box BCHG$ is the rectangle contained by $A$ and $BC$, because it is contained by $BC$ and $BG$, and $BG = A$.
Similarly, from Opposite Sides and Angles of Parallelogram are Equal:

$\Box BDKG$ is the rectangle contained by $A$ and $BD$, because it is contained by $BD$ and $BG = A$
$\Box DEKL$ is the rectangle contained by $A$ and $DE$, because it is contained by $DE$ and $DK$, and $DK = A$
$\Box ECHL$ is the rectangle contained by $A$ and $EC$, because it is contained by $EC$ and $EL$, and $EL = A$.
Hence the result.
$\blacksquare$



This article is complete as far as it goes, but it could do with expansion.In particular: Proof by Dedekind cuts a la Rudin: [1]You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1957: Tom M. Apostol: Mathematical Analysis ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: $\text{1-2}$ Arithmetical properties of real numbers: Axiom $3$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.2$ Operations with Real Numbers: $(5)$




