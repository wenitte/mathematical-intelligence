# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Derivative



Theorem
The following definitions of the concept of Derivative of Real Function at Point are equivalent:
Let $I$ be an open real interval.
Let $f: I \to \R$ be a real function defined on $I$.
Let $\xi \in I$ be a point in $I$.

Definition 1
That is, suppose the limit $\ds \lim_{x \mathop \to \xi} \frac {\map f x - \map f \xi} {x - \xi}$ exists.

Then this limit is called the derivative of $f$ at the point $\xi$.

Definition 2
That is, suppose the limit $\ds \lim_{h \mathop \to 0} \frac {\map f {\xi + h} - \map f \xi} h$ exists.

Then this limit is called the derivative of $f$ at the point $\xi$.


Proof













\(\ds f' \left({\xi}\right)\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {f \left({\xi + h}\right) - f \left({\xi}\right)} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{x - \xi \mathop \to 0} \frac {f \left({x}\right) - f \left({\xi}\right)} {\xi + h - \xi}\)





substituting $x = \xi + h$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \xi} \frac {f \left({x}\right) - f \left({\xi}\right)} {x - \xi}\)









$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 2.1$, Appendix $A$: Alternate Form of the Derivative




