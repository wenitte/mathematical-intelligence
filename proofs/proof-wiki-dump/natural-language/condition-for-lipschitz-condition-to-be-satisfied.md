# 

Source: https://proofwiki.org/wiki/Condition_for_Lipschitz_Condition_to_be_Satisfied

Theorem
Let $\phi$ be a real function.

Then $\phi$ satisfies the Lipschitz condition on a closed real interval $\closedint a b$ if:

$\forall y \in \closedint a b: \exists A \in \R: \size {\map {\phi'} y} \le A$


Proof
Integrating both sides of $\size {\map {\phi'} y} \le A$ gives us:














\(\ds \size {\map {\phi'} y}\)

\(\le\)







\(\ds A\)














\(\ds \leadsto \ \ \)





\(\ds -A\)

\(\le\)







\(\ds \map {\phi'} y \le A\)














\(\ds \leadsto \ \ \)





\(\ds \int {-A} \rd y\)

\(\le\)







\(\ds \map \phi y \le \int A \rd y\)














\(\ds \leadsto \ \ \)





\(\ds -A y\)

\(\le\)







\(\ds \map \phi y \le y\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map \phi y}\)

\(\le\)







\(\ds A y\)










On the interval $\closedint a b$ it follows that $\size {\map \phi y}$ is bounded by the greater of $A a$ and $A b$.
Hence the result.
$\blacksquare$





