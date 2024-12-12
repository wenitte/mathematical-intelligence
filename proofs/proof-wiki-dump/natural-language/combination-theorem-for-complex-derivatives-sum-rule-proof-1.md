# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Sum_Rule/Proof_1

Theorem
$\map {\paren {f + g}'} z = \map {f'} z + \map {g'} z$


Proof
Let $z_0 \in D$ be a point in $D$.
Define $k : D \to \Z$ by $\map k {z_0} = \map f {z_0} + \map g {z_0}$.
Then:














\(\ds \map { k' } {z_0}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map k {z_0 + h} - \map k {z_0} } h\)





Definition of Derivative of Complex Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\map f {z_0 + h} + \map g {z_0 + h} } - \paren {\map f {z_0} +\map g {z_0} } } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} + \map g {z_0 + h} - \map f {z_0} - \map g {z_0} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\map f {z_0 + h} - \map f {z_0} } + \paren {\map g {z_0 + h} - \map g {z_0} } } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\map f {z_0 + h} - \map f {z_0} } h + \frac {\map g {z_0 + h} - \map g {z_0} } h}\)





Complex Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} - \map f {z_0} } h + \lim_{h \mathop \to 0} \frac {\map g {z_0 + h} - \map g {z_0} } h\)





Sum Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map {f'} {z_0} + \map {g'} {z_0}\)





Definition of Derivative of Complex Function








\(\ds \leadsto \ \ \)

\(\ds \forall z \in D: \, \)



\(\ds \map { \paren{f+g}' } z\)

\(=\)







\(\ds \map {f'} z + \map {g'} z\)





Definition of Derivative of Complex Function



$\blacksquare$





