# 

Source: https://proofwiki.org/wiki/General_Vector_Solution_of_Fundamental_Matrix

Theorem
Let $\map \Phi t$ be a fundamental matrix of the system $x' = \map A t x$.

Then:

$\map \Phi t c$ is a general solution of $x' = \map A t x$.


Proof
By definition, $\map \Phi t$ is non-singular, and therefore has an inverse $\map {\Phi^{-1} } t$.
If $z$ is an arbitrary solution, then $\map \Phi t \, \map {\Phi^{-1} } {t_0} \, \map z {t_0}$ also solves the system and has the same initial condition.
Hence by Existence and Uniqueness Theorem for 1st Order IVPs $\map \Phi t \, \map {\Phi^{-1} } {t_0} \, \map z {t_0}$ equals $z$.
Letting $c = \map {\Phi^{-1} } {t_0} \, \map z {t_0}$ finishes the proof.
$\blacksquare$





