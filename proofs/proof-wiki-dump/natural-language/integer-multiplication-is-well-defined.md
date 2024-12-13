# 

Source: https://proofwiki.org/wiki/Integer_Multiplication_is_Well-Defined


It has been suggested that this page or section be merged into Multiplication of Cross-Relation Equivalence Classes on Natural Numbers is Well-Defined.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Integer multiplication is well-defined.


Proof 1
Let us define $\eqclass {\tuple {a, b} } \boxtimes$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxtimes$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxtimes$.
$\boxtimes$ is the congruence relation defined on $\N \times \N$ by $\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$.

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxtimes$, as suggested.
We need to show that $\eqclass {a, b} {} = \eqclass {p, q} {} \land \eqclass {c, d} {} = \eqclass {r, s} {} \implies \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {p, q} {} \times \eqclass {r, s} {}$.

We have $\eqclass {a, b} {} = \eqclass {p, q} {} \land \eqclass {c, d} {} = \eqclass {r, s} {} \iff a + q = b + p \land c + s = d + r$ by the definition of $\boxtimes$.

From the definition of integer multiplication, we have:

$\forall a, b, c, d \in \N: \eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {a c + b d, a d + b c} {}$

So, suppose that $\eqclass {a, b} {} = \eqclass {p, q} {}$ and $\eqclass {c, d} {} = \eqclass {r, s} {}$.

Both $+$ and $\times$ are commutative and associative on $\N$. Thus:














\(\ds \)

\(\)







\(\ds \paren {a c + b d + p s + q r} + \paren {p c + q c + p d + q d}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + q} c + \paren {b + p} d + p \paren {c + s} + q \paren {d + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {b + p} c + \paren {a + q} d + p \paren {d + r} + q \paren {c + s}\)





as $a + q = b + p, c + s = d + r$














\(\ds \)

\(=\)







\(\ds b c + p c + q d + a d + p d + p r + q c + q s\)




















\(\ds \)

\(=\)







\(\ds \paren {a d + b c + p r + q s} + \paren {p c + q c + p d + q d}\)










So we have $a c + b d + p s + q r = a d + b c + p r + q s$ and so, by the definition of $\boxtimes$, we have:

$\eqclass {a c + b d, a d + b c} {} = \eqclass {p r + q s, p s + q r} {}$

So, by the definition of integer multiplication, this leads to:

$\eqclass {a, b} {} \times \eqclass {c, d} {} = \eqclass {p, q} {} \times \eqclass {r, s} {}$

Thus integer multiplication has been shown to be well-defined.
$\blacksquare$


Proof 2
Consider the formal definition of the integers: $x = \eqclass {a, b} {}$ is an equivalence class of ordered pairs of natural numbers.

Consider the mapping $\phi: \N_{>0} \to \Z_{>0}$ defined as:

$\forall u \in \N_{>0}: \map \phi u = u'$
where $u' \in \Z$ be the (strictly) positive integer $\eqclass {b + u, b} {}$.
Let $v' = \eqclass {c + v, c} {}$.
Then:














\(\ds u' v'\)

\(=\)







\(\ds \eqclass {b + u, b} {} \times \eqclass {c + v, c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\paren {b + u} \paren {c + v} + b c, \paren {b + u} c + b \paren {c + v} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b c + b v + c u + u v + b c, b c + u c + b c + b v} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b c + u v, b c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b + u v, b} {}\)




















\(\ds \)

\(=\)







\(\ds \paren {u v}'\)









$\blacksquare$





