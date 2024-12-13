# 

Source: https://proofwiki.org/wiki/Min_Operation_is_Associative

Theorem
The min operation is associative:

$\map \min {\map \min {x, y}, z} = \map \min {x, \map \min {y, z} }$
Thus we are justified in writing $\map \min {x, y, z}$.


Proof
To simplify our notation:

Let $\map \min {x, y}$ be (temporarily) denoted $x \underline \vee y$.

There are the following cases to consider:

$(1): \quad x \le y \le z$
$(2): \quad x \le z \le y$
$(3): \quad y \le x \le z$
$(4): \quad y \le z \le x$
$(5): \quad z \le x \le y$
$(6): \quad z \le y \le x$

Taking each one in turn:

$(1): \quad$ Let $x \le y \le z$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds x \underline \vee y\)

\(\ds = x\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds x \underline \vee z\)

\(\ds = x\)









$(2): \quad$ Let $x \le z \le y$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds x \underline \vee z\)

\(\ds = x\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds x \underline \vee z\)

\(\ds = x\)









$(3): \quad$ Let $y \le x \le z$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds x \underline \vee y\)

\(\ds = y\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds y \underline \vee z\)

\(\ds = y\)









$(4): \quad$ Let $y \le z \le x$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds x \underline \vee y\)

\(\ds = y\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds y \underline \vee z\)

\(\ds = y\)









$(5): \quad$ Let $z \le x \le y$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds x \underline \vee z\)

\(\ds = z\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds x \underline \vee z\)

\(\ds = z\)









$(6): \quad$ Let $z \le y \le x$. Then:













\(\ds x \underline \vee \paren {y \underline \vee z}\)

\(=\)







\(\ds y \underline \vee z\)

\(\ds = z\)


















\(\ds \paren {x \underline \vee y} \underline \vee z\)

\(=\)







\(\ds y \underline \vee z\)

\(\ds = z\)








Thus in all cases it can be seen that the result holds.
$\blacksquare$


Also see
Max Operation is Associative




