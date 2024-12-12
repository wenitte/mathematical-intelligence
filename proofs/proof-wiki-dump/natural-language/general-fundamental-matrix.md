# 

Source: https://proofwiki.org/wiki/General_Fundamental_Matrix

Theorem
Let $\map \Phi t$ be a fundamental matrix of the system $x' = \map A t x$.
Then:

$\map \Phi t C$
is a general fundamental matrix of $x' = \map A t x$, where $C$ is any nonsingular matrix.


Proof
$\map \Phi t C$ is a fundamental matrix as follows:

$\dfrac \d {\d t} \map \Phi t C = \map {\Phi'} t C = \map A t \map \Phi t C$
$\map \det {\map \Phi t C} = \map \det {\map \Phi t} \map \det C \ne 0$

Let $\map \Psi t$ be an arbitrary fundamental matrix.
Then from General Vector Solution of Fundamental Matrix $\map \Phi t \map {\Phi^{-1} } {t_0} \map \Psi {t_0}$ solves the same matrix equation and has the same initial conditions.
Hence by uniqueness:

$\map \Phi t \, \map {\Phi^{-1} } {t_0} \map \Psi {t_0}$ is equal to $\map \Psi t$
Letting $C = \map {\Phi^{-1} } {t_0} \map \Psi {t_0}$ finishes the proof.
$\blacksquare$





