# 

Source: https://proofwiki.org/wiki/Max_and_Min_Operations_are_Distributive_over_Each_Other

Theorem
The Max and Min operations are distributive over each other:

$\map \max {x, \map \min {y, z} } = \map \min {\map \max {x, y}, \map \max {x, z} }$
$\map \max {\map \min {x, y}, z} = \map \min {\map \max {x, z}, \map \max {y, z} }$
$\map \min {x, \map \max {y, z} } = \map \max {\map \min {x, y}, \map \min {x, z} }$
$\map \min {\map \max {x, y}, z} = \map \max {\map \min {x, z}, \map \min {y, z} }$


Proof
To simplify our notation, let $\map \max {x, y}$ be (temporarily) denoted $x \overline \wedge y$, and let $\map \min {x, y}$ be (temporarily) denoted $x \underline \vee y$.
Note that, once we have proved:

$x \overline \wedge \paren {y \underline \vee z} = \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}$
$x \underline \vee \paren {y \overline \wedge z} = \paren {x \underline \vee y} \overline \wedge \paren {x  \underline \vee z}$
then the other results follow immediately from Max Operation is Commutative and Min Operation is Commutative.

There are the following cases to consider:

$(1): \quad x \le y \le z$
$(2): \quad x \le z \le y$
$(3): \quad y \le x \le z$
$(4): \quad y \le z \le x$
$(5): \quad z \le x \le y$
$(6): \quad z \le y \le x$

$(1): \quad $ Let $x \le y \le z$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge y = y\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds y \underline \vee z = y\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee z = x\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge x = x\)










$(2): \quad $ Let $x \le z \le y$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge z = z\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds y \underline \vee z = z\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee y = x\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge x = x\)










$(3): \quad $ Let $y \le x \le z$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge y = x\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee z = x\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee z = x\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds y \overline \wedge x = x\)










$(4): \quad $ Let $y \le z \le x$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge y = x\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee x = x\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee z = z\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds y \overline \wedge z = z\)










$(5): \quad $ Let $z \le x \le y$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge z = x\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds y \underline \vee x = x\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee y = x\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge z = x\)










$(6): \quad $ Let $z \le y \le x$.
Then:














\(\ds x \overline \wedge \paren {y \underline \vee z}\)

\(=\)







\(\ds x \overline \wedge z = x\)




















\(\ds \paren {x \overline \wedge y} \underline \vee \paren {x \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee x = x\)




















\(\ds \)

\(\)







\(\ds \)




















\(\ds x \underline \vee \paren {y \overline \wedge z}\)

\(=\)







\(\ds x \underline \vee y = y\)




















\(\ds \paren {x \underline \vee y} \overline \wedge \paren {x \underline \vee z}\)

\(=\)







\(\ds y \overline \wedge z = y\)










Thus in all cases it can be seen that the result holds.
$\blacksquare$





