# 

Source: https://proofwiki.org/wiki/Max_Operation_is_Associative



Theorem
The Max operation is associative:

$\map \max {\map \max {x, y}, z} = \map \max {x, \max \paren{y, z}}$
Thus we are justified in writing $\map \max {x, y, z}$.


Proof
To simplify our notation:

Let $\map \max {x, y}$ be (temporarily) denoted $x \overline \wedge y$

There are the following cases to consider:

$(1): \quad x \le y \le z$
$(2): \quad x \le z \le y$
$(3): \quad y \le x \le z$
$(4): \quad y \le z \le x$
$(5): \quad z \le x \le y$
$(6): \quad z \le y \le x$

Taking each one in turn:

$(1): \quad$ Let $x \le y \le z$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = z\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds y \overline \wedge z\)

\(\ds = z\)









$(2): \quad$ Let $x \le z \le y$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge y\)

\(\ds = y\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds y \overline \wedge z\)

\(\ds = y\)









$(3): \quad$ Let $y \le x \le z$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = z\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = z\)









$(4): \quad$ Let $y \le z \le x$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = x\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = x\)









$(5): \quad$ Let $z \le x \le y$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge y\)

\(\ds = y\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds y \overline \wedge z\)

\(\ds = y\)









$(6): \quad$ Let $z \le y \le x$. Then:













\(\ds x \overline \wedge \paren{y \overline \wedge z}\)

\(=\)







\(\ds x \overline \wedge y\)

\(\ds = x\)


















\(\ds \paren{x \overline \wedge y} \overline \wedge z\)

\(=\)







\(\ds x \overline \wedge z\)

\(\ds = x\)








Thus in all cases it can be seen that the result holds.
$\blacksquare$


Also see
Min Operation is Associative


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.12 \ \text{(a)}$




