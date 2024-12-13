# 

Source: https://proofwiki.org/wiki/Integrated_Linear_Differential_Mapping_is_Continuous

Theorem
Let $C^1 \closedint a b := \map {C^1} {\closedint a b, \R}$ be the space of real functions of differentiability class $C^1$.
Let $S$ be the set of differentiable functions on closed real interval vanishing at their endpoints:

$S := \set {\mathbf h \in C^1 \closedint a b : \map {\mathbf h} a = \map {\mathbf h} b = 0}$
Let $S \subseteq C^1 \closedint a b$ be equiped with the $C^1$ norm. 
Let $\mathbf A, \mathbf B \in C \closedint a b$ be continuous real functions.
Let $L : S \to \R$ be the integrated linear differential mapping:

$\ds \map L {\mathbf h} = \int_a^b \paren {\map {\mathbf A} t \map {\mathbf h} t + \map {\mathbf B} t \map {\mathbf h'} t} \rd t$
where $\mathbf h \in S$.

Then $L$ is continuous.


Proof
We have that the Integrated Linear Differential Mapping is Linear. 
For $\mathbf h \in S$ we have:














\(\ds \size {\map L {\mathbf h} }\)

\(=\)







\(\ds \size {\int_a^b \paren {\map {\mathbf A} t \map {\mathbf h} t + \map {\mathbf B} t \map {\mathbf h'} t }\rd t}\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \size {\map {\mathbf A} t \map {\mathbf h} t + \map {\mathbf B} t \map {\mathbf h'} t } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \paren {\size {\map {\mathbf A} t} \size {\map {\mathbf h} t} + \size {\map {\mathbf B} t} \size {\map {\mathbf h'} t} } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_a^b \paren {\size {\map {\mathbf A} t} \norm {\mathbf h}_\infty + \size {\map {\mathbf B} t} \norm {\mathbf h'}_\infty } \rd t\)





Definition of Supremum Norm on Space of Continuous on Closed Interval Real-Valued Functions














\(\ds \)

\(\le\)







\(\ds \int_a^b \paren {\size {\map {\mathbf A} t} \norm {\mathbf h}_{1, \infty} + \size {\map {\mathbf B} t} \norm {\mathbf h'}_\infty } \rd t\)





$\norm {\mathbf h}_{1, \infty} = \norm {\mathbf h}_\infty + \norm {\mathbf h'}_\infty \ge \norm {\mathbf h}_\infty$














\(\ds \)

\(\le\)







\(\ds \int_a^b \paren {\size {\map {\mathbf A} t} \norm {\mathbf h}_{1, \infty} + \size {\map {\mathbf B} t} \norm {\mathbf h'}_{1, \infty} } \rd t\)





$\norm {\mathbf h}_{1, \infty} = \norm {\mathbf h}_\infty + \norm {\mathbf h'}_\infty \ge \norm {\mathbf h'}_\infty$














\(\ds \)

\(\le\)







\(\ds \paren {\int_a^b \paren {\size {\map {\mathbf A} t} + \size {\map {\mathbf B} t} } \rd t} \norm {\mathbf h}_{1, \infty}\)




















\(\ds \)

\(=\)







\(\ds M \norm {\mathbf h}_{1, \infty}\)









where: 

$\ds M : = \int_a^b \paren {\size {\map {\mathbf A} t} + \size {\map {\mathbf B} t} } \rd t$
By Continuity of Linear Transformation between Normed Vector Spaces $L$ is continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




