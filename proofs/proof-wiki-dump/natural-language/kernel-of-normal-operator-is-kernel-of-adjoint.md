# 

Source: https://proofwiki.org/wiki/Kernel_of_Normal_Operator_is_Kernel_of_Adjoint

Theorem
Let $H$ be a Hilbert space.
Let $A \in \map B H$ be a normal operator.
Then:

$\ker A = \ker A^*$
where:

$\ker$ denotes kernel
$A^*$ denotes the adjoint of $A$.


Proof
Let $x \in H$ be arbitrary.
Then:














\(\ds x\)

\(\in\)







\(\ds \ker A\)














\(\ds \leadstoandfrom \ \ \)





\(\ds A x\)

\(=\)







\(\ds \mathbf 0_H\)





Definition of Kernel of Linear Transformation








\(\ds \leadstoandfrom \ \ \)





\(\ds \gen {A x, A x}\)

\(=\)







\(\ds 0\)





Definition of Inner Product








\(\ds \leadstoandfrom \ \ \)





\(\ds \gen {A^*Ax, x}\)

\(=\)







\(\ds 0\)





Definition of Adjoint Linear Transformation








\(\ds \leadstoandfrom \ \ \)





\(\ds \gen {A A^* x, x}\)

\(=\)







\(\ds 0\)





Definition of Normal Operator








\(\ds \leadstoandfrom \ \ \)





\(\ds \gen {x, AA^*x}\)

\(=\)







\(\ds 0\)





Definition of Inner Product








\(\ds \leadstoandfrom \ \ \)





\(\ds \gen {A^*x, A^* x}\)

\(=\)







\(\ds 0\)





Definition of Adjoint Linear Transformation








\(\ds \leadstoandfrom \ \ \)





\(\ds A^*x\)

\(=\)







\(\ds \mathbf 0_H\)





Definition of Inner Product








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \ker A^*\)





Definition of Kernel of Linear Transformation



Hence, by definition of set equality:

$\ker A = \ker A^*$
$\blacksquare$





