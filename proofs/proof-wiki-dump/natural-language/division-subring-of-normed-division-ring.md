# 

Source: https://proofwiki.org/wiki/Division_Subring_of_Normed_Division_Ring



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $S$ be a division subring of $R$.
Then:

$\struct {S, \norm {\, \cdot \,}_S}$ is a normed division subring of $\struct {R, \norm {\, \cdot \,} }$
where $\norm {\, \cdot \,}_S$ is the norm $\norm {\,\cdot\,}$ restricted to $S$.


Proof
Norm Axiom $\text N 1$: Positive Definiteness









\(\ds \forall x \in S: \, \)



\(\ds \norm x_S\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \norm x\)

\(=\)







\(\ds 0\)





Definition of $\norm x_S$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds 0\)





Norm Axiom $\text N 1$: Positive Definiteness



$\Box$


Norm Axiom $\text N 2$: Multiplicativity









\(\ds \forall x, y \in S: \, \)



\(\ds \norm {x y}_S\)

\(=\)







\(\ds \norm {x y}\)





Definition of $\norm {\, \cdot \,}_S$














\(\ds \)

\(=\)







\(\ds \norm x \norm y\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm x_S \norm y_S\)





Definition of $\norm {\, \cdot \,}_S$




$\Box$


Norm Axiom $\text N 3$: Triangle Inequality









\(\ds \forall x, y \in S: \, \)



\(\ds \norm {x + y}_S\)

\(=\)







\(\ds \norm {x + y}\)





Definition of $\norm {\, \cdot \,}_S$














\(\ds \)

\(\le\)







\(\ds \norm x + \norm y\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm x_S + \norm y_S\)





Definition of $\norm {\, \cdot \,}_S$



$\blacksquare$





