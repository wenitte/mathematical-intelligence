# 

Source: https://proofwiki.org/wiki/User:DingChao/Sandbox/Ultraproduct_is_Well-defined


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Definition:Ultraproduct is well-defined.
More specificly, following the definitions on Definition:Ultraproduct,
we are going to prove that:

(1) $f^\mathcal M$ is well-defined
(2) $R^\mathcal M$ is well-defined
Proof
First of all, we need to prove

Lemma
Following the definitions on Definition:Ultraproduct

$(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$, $k = 1, \dotsc, n$
if and only if

$\left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \} \in \mathcal U$
Proof
Let

$I_k := \left\{ i \in I : m_{k, i} = m'_{k, i} \right\}$
$I^* :=  \left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \}= \displaystyle \bigcap^n_{k = 1} I_k $
Suppose

$(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$ for $k = 1, \dotsc, n$
we have

$I_k \in \mathcal U$ for $k = 1, \dotsc, n$
Since $\mathcal U$ is closed under intersection

$I^* \in \mathcal U$
On the other hand, suppose 

$I^* \in \mathcal U$
Since $\mathcal U$ is closed under getting supersets

$I_k \in \mathcal U$ for $k = 1, \dotsc, n$
Therefore

$(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$

$\blacksquare$

Proposition 1
The definition of $f^\mathcal M$ is consistent. 
i.e. for $(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$, $k = 1, \dotsc, n$

$\left(f^{\mathcal M_i}(m_{1, i}, \dots, m_{n, i})\right)_\mathcal U = \left(f^{\mathcal M_i}(m'_{1, i}, \dots, m'_{n, i})\right)_\mathcal U$


Proof
Firstly note that: 

$\{i : f^{\mathcal M_i}(m_{1, i}, \dots, m_{n, i}) = f^{\mathcal M_i}(m'_{1, i}, \dots, m'_{n, i}) \} \supseteq  \{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} $
and by $\mathcal U$ is an ultrafilter on $I$, we have

$\{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} \in \mathcal U$
implies

$\{i : f^{\mathcal M_i}(m_{1, i}, \dots, m_{n, i}) = f^{\mathcal M_i}(m'_{1, i}, \dots, m'_{n, i}) \} \in \mathcal U$
Therefore, 

$(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$, $k = 1, \dotsc, n$, by #Lemma, which is equvalent to $\{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} \in \mathcal U$
implies

$\left(f^{\mathcal M_i}(m_{1, i}, \dots, m_{n, i})\right)_\mathcal U = (f^{\mathcal M_i}(m'_{1, i}, \dots, m'_{n, i}))_\mathcal U$

$\blacksquare$

Proposition 2
The definition of $R^\mathcal M$ is consistent. 
i.e. for $(m_{k, i})_\mathcal U = (m'_{k, i})_\mathcal U$, $k = 1, \dotsc, n$

$\left\{i \in I: \left({m_{1, i}, \dots, m_{n, i} }\right) \in R^\mathcal M_i\right\} \in \mathcal U$
if and only if

$\left\{i \in I: \left({m'_{1, i}, \dots, m'_{n, i} }\right) \in R^\mathcal M_i\right\} \in \mathcal U$


Proof
Let

$S := \left\{i \in I: \left({m_{1, i}, \dots, m_{n, i} }\right) \in R^\mathcal M_i\right\}$
$S' := \left\{i \in I: \left({m'_{1, i}, \dots, m'_{n, i} }\right) \in R^\mathcal M_i\right\}$
$I^* :=  \left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \}$
$T := I^* \cap S$
$T' := I^* \cap S'$
As #Lemma imples

$I^* \in \mathcal U$
therefore

$S \in \mathcal U$ implies $T \in \mathcal U$
Note that

$\left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right)$ for $i \in I^*$
we have

$T = T'$
Hence

$T' \in \mathcal U$
and

$S' \in \mathcal U$ since $S' \supseteq T'$
So far we have proved

$S \in \mathcal U$ implies $S' \in \mathcal U$
By symmetry, 

$S' \in \mathcal U$ implies $S \in \mathcal U$
$\blacksquare$





