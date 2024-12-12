# 

Source: https://proofwiki.org/wiki/Composite_Localic_Mapping_is_Localic_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L_1 = \struct{S_1, \preceq_1}, L_2 = \struct{S_2, \preceq_2}$ and $L_3 = \struct{S_3, \preceq_3}$ be locales.
Let $f_1 : L_1 \to L_2$ and $f_2 : L_2 \to L_3$ be localic mappings.

Then:

the composite $f_2 \circ f_1 : L_1 \to L_3$ is a localic mapping.
Proof
By definition of a localic mapping:

$f_1, f_2$ are the upper adjoint of Galois connections $\tuple{f_1, d_1}, \tuple{f_2, d_2}$ respectively
where $d_1 : L_2 \to L_1$ and $d_2 : L_3 \to L_2$ are frame homomorphsims.

From Composite Frame Homomorphism is Frame Homomorphism:

$d_1 \circ d_2 : L_3 \to L_2$ is a frame homomorphsims

From Composition of Galois Connections is Galois Connection:

$\tuple {f_2 \circ f_1, d_1 \circ d_2}$ is a Galois connection

Hence:

$f_2 \circ f_1$ is the upper adjoint of a Galois connection
By definition of localic mapping:

$f_2 \circ f_1$ is a localic mapping
$\blacksquare$

Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 2.2$




