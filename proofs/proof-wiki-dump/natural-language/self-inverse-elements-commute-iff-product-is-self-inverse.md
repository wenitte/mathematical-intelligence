# 

Source: https://proofwiki.org/wiki/Self-Inverse_Elements_Commute_iff_Product_is_Self-Inverse



Theorem
Let $\struct {G, \circ}$ be a group.
Let $x, y \in \struct {G, \circ}$, such that $x$ and $y$ are self-inverse.

Then $x$ and $y$ commute if and only if $x \circ y$ is also self-inverse.


Proof
Let the identity element of $\struct {G, \circ}$ be $e_G$.


Necessary Condition
Let $x$ and $y$ commute.
Then:














\(\ds \paren {x \circ y} \circ \paren {x \circ y}\)

\(=\)







\(\ds x \circ \paren {y \circ x} \circ y\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds x \circ \paren {x \circ y} \circ y\)





$x$ and $y$ commute














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ \paren  {y \circ y}\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds e_G \circ e_G\)





$x$ and $y$ are self-inverse














\(\ds \)

\(=\)







\(\ds e_G\)





Definition of Identity Element




Thus $\paren {x \circ y} \circ \paren {x \circ y} = e_G$, proving that $x \circ y$ is self-inverse.
$\Box$


Sufficient Condition
Now, suppose that $x \circ y$ is self-inverse.
We already have that $x$ and $y$ are self-inverse.
Thus:

$\paren {x \circ x} \circ \paren {y \circ y} = e_G \circ e_G = e_G$

Because $x \circ y$ is self-inverse, we have:

$\paren {x \circ y} \circ \paren {x \circ y} = e_G$
Thus:














\(\ds \paren {x \circ y} \circ \paren {x \circ y}\)

\(=\)







\(\ds \paren {x \circ x} \circ \paren {y \circ y} = e_G\)














\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {y \circ x} \circ y\)

\(=\)







\(\ds x \circ \paren {x \circ y} \circ y\)





$\circ$ is associative








\(\ds \leadsto \ \ \)





\(\ds y \circ x\)

\(=\)







\(\ds x \circ y\)





Cancellation Laws




So $x$ and $y$ commute.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(4)$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $14$




