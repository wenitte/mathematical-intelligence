# 

Source: https://proofwiki.org/wiki/Adjoint_of_Identity_Transformation

Theorem
Let $\tuple {\HH, \innerprod \cdot \cdot_\HH}$ be a Hilbert space.
Let $I_\HH$ be the identity transformation on $\HH$.

Then: 

${I_\HH}^* = I_\HH$
where ${I_\HH}^*$ denotes the adjoint of $I_\HH$. 


Proof
From Identity Mapping on Normed Vector Space is Bounded Linear Operator:

$I_\HH$ is a bounded linear transformation.
So, from the existence part of Existence and Uniqueness of Adjoint:

$I_\HH$ has an adjoint ${I_\HH}^*$.
That is:

$\innerprod {I_\HH h} g_\HH = \innerprod h { {I_\HH}^* g}_\HH$
for all $h, g \in \HH$.
Note that by the definition of the identity transformation, we also have: 

$\innerprod {I_\HH h} g_\HH = \innerprod h {I_\HH g}_\HH$
for all $h, g \in \HH$.
So, from the uniqueness part of Existence and Uniqueness of Adjoint:

$I_\HH = {I_\HH}^*$
$\blacksquare$





