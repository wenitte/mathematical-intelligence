# 

Source: https://proofwiki.org/wiki/Integral_of_Compactly_Supported_Function

Theorem
Let $f : \R \to \R$ be a continuous real function.
Let $K \subset \R$ be a compact subset, say, $\closedint a b$.
Let $K$ be the support of $f$:

$\map \supp f = K$.

Then:

$\ds \int_{- \infty}^\infty \map f x \rd x = \int_a^b \map f x \rd x$


Proof













\(\ds \int_{-\infty}^\infty \map f x \rd x\)

\(=\)







\(\ds \int_{\overline \R} \map f x \rd x\)





Definition of Extended Real Number Line














\(\ds \)

\(=\)







\(\ds \int_{K \cup \paren { {\overline \R} \setminus K} } \map f x \rd x\)





Definition of Set Difference, Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \int_K \map f x \rd x + \int_{\R \setminus K} \map f x \rd x\)





Riemann Integral Operator is Linear Mapping














\(\ds \)

\(=\)







\(\ds \int_K \map f x \rd x\)





Definition of Support of Continuous Mapping














\(\ds \)

\(=\)







\(\ds \int_a^b \map f x \rd x\)









$\blacksquare$





