# 

Source: https://proofwiki.org/wiki/Norm_of_Hermitian_Operator/Corollary

Corollary to Norm of Hermitian Operator
Let $\mathbb F \in \set {\R, \C}$.
Let $\HH$ be a Hilbert space over $\mathbb F$. 
Let $A : \HH \to \HH$ be a bounded Hermitian operator.
Let $\innerprod \cdot \cdot_\HH$ denote the inner product on $\HH$.

Suppose that:

$\forall h \in \HH: \innerprod {A h} h_\HH = 0$
Then $A$ is the zero operator $\mathbf 0$.


Proof
Let $\norm \cdot_\HH$ denote the inner product norm on $\HH$. 
Let $\norm A$ denote the norm of $A$.

From Norm of Hermitian Operator: 

$\norm A = \sup \set {\size {\innerprod {A h} h_\HH}: h \in \HH, \norm h_\HH = 1}$

By definition of inner product norm:

$\forall h \in \HH: \innerprod {A h} h_\HH = 0$
Hence, in particular: 

$\innerprod {A h} h_\HH = 0$
for all $h \in \HH$ such that $\norm h_\HH = 1$.

So: 

$\set {\size {\innerprod {A h} h_\HH}: h \in \HH, \norm h_\HH = 1} = \set 0$
giving: 

$\norm A = \sup \set 0$
Hence from the definition of supremum: 

$\norm A = 0$
So from Norm on Bounded Linear Transformation equals Zero iff Zero Operator:

$A$ is the zero operator.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.14$




